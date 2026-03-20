import gsap from 'gsap';

export interface FilterGridConfig {
  gridSelector: string;
  itemSelector: string;
  loadMoreTriggerId: string;
  loadMoreContainerId: string;
  sectionId: string;
  step?: number;
  paginationClass?: string;
  matchType?: 'exact' | 'includes'; // 'exact' for single categories, 'includes' for multiple array matching
}

export function initFilterAndPagination(config: FilterGridConfig) {
  const {
    gridSelector,
    itemSelector,
    loadMoreTriggerId,
    loadMoreContainerId,
    sectionId,
    step = 4,
    paginationClass = 'hidden-by-pagination',
    matchType = 'includes',
  } = config;

  let filterTimeline: gsap.core.Timeline | null = null;
  const loadMoreBtn = document.getElementById(loadMoreTriggerId);
  const loadMoreContainer = document.getElementById(loadMoreContainerId);

  // --- LÓGICA DE PAGINACIÓN (VER MÁS) ---
  loadMoreBtn?.addEventListener('click', () => {
    const hiddenWrappers = document.querySelectorAll(`.${paginationClass}`);
    let count = 0;

    hiddenWrappers.forEach((wrapper) => {
      if (count < step) {
        wrapper.classList.remove('hidden', paginationClass);
        const el = wrapper as HTMLElement;

        // Estado inicial para animación suave
        el.style.opacity = '0';
        el.style.transform = 'translateY(15px)';
        el.style.display = '';

        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: 'power2.out',
          delay: count * 0.05,
        });

        count++;
      }
    });

    const remaining = document.querySelectorAll(`.${paginationClass}`).length;
    if (remaining === 0 && loadMoreContainer) {
      gsap.to(loadMoreContainer, {
        opacity: 0,
        height: 0,
        margin: 0,
        duration: 0.3,
        onComplete: () => {
          loadMoreContainer.style.display = 'none';
        },
      });
    }
  });

  // --- LÓGICA CENTRAL DE FILTRADO CON GSAP ---
  const handleFilterChange = (event: Event) => {
    const customEvent = event as CustomEvent;
    
    // Ignorar si el evento de filtrado pertenece a otra sección (ej. Certificados vs Proyectos)
    if (customEvent.detail.section !== sectionId) return;

    const { activeTechs } = customEvent.detail as { activeTechs: string[] };
    const wrappers = document.querySelectorAll(itemSelector);

    if (filterTimeline) filterTimeline.kill();

    filterTimeline = gsap.timeline({
      defaults: { duration: 0.25, ease: 'power2.out' },
    });

    const wrappersToShow: HTMLElement[] = [];
    const wrappersToHide: HTMLElement[] = [];

    // 'all' es el valor usado en single-mode cuando no hay filtro activo
    const isFiltering = activeTechs && activeTechs.length > 0 && !activeTechs.includes('all');

    if (loadMoreContainer) {
      loadMoreContainer.style.display = isFiltering ? 'none' : '';
      if (!isFiltering) {
        const remaining = document.querySelectorAll(`.${paginationClass}`).length;
        loadMoreContainer.style.display = remaining > 0 ? '' : 'none';
      }
    }

    wrappers.forEach((wrapper) => {
      const el = wrapper as HTMLElement;
      
      if (!isFiltering && el.classList.contains(paginationClass)) {
        wrappersToHide.push(el);
        return;
      }

      let show = true;

      // Evaluación del predicado según el metadata inyectado en el DOM
      if (isFiltering) {
        if (matchType === 'includes') {
          // data-tech contiene un string separado por comas: "react,astro,tailwind"
          const techStr = el.getAttribute('data-tech') || '';
          const itemTechs = techStr.split(',');
          // Must match ALL selected active filters (AND logic)
          show = activeTechs.every((tech: string) => itemTechs.includes(tech));
        } else if (matchType === 'exact') {
          // data-category contiene una única categoría en lowercase
          const itemCategory = el.getAttribute('data-category') || '';
          const lowercaseActiveTechs = activeTechs.map(t => t.toLowerCase());
          show = lowercaseActiveTechs.includes(itemCategory.toLowerCase());
        }
      }

      if (show) wrappersToShow.push(el);
      else wrappersToHide.push(el);
    });

    // Animación de Salida
    wrappersToHide.forEach((el) => {
      filterTimeline!.to(
        el,
        {
          opacity: 0,
          scale: 0.95,
          duration: 0.15,
          onComplete: () => {
            el.classList.add('hidden');
            el.style.display = 'none';
          },
        },
        0
      );
    });

    // Animación de Entrada
    wrappersToShow.forEach((el) => {
      el.classList.remove('hidden');
      el.style.display = '';
      filterTimeline!.to(el, { opacity: 1, scale: 1, duration: 0.2 }, 0);
    });
  };

  document.addEventListener('filter-changed', handleFilterChange);
  
  // Limpieza vitalicia preventiva para memoria en el router de Astro ViewTransitions
  document.addEventListener('astro:before-swap', () => {
    if (filterTimeline) filterTimeline.kill();
  });
}
