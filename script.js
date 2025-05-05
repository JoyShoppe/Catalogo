// Abrir y cerrar menú lateral
const menuBtn = document.getElementById('menu-btn');
const sideMenu = document.getElementById('side-menu');
const closeMenu = document.getElementById('close-menu');

menuBtn.addEventListener('click', () => {
  sideMenu.classList.remove('translate-x-full');
});

closeMenu.addEventListener('click', () => {
  sideMenu.classList.add('translate-x-full');
});

// Cerrar menú al hacer clic en un elemento del menú y navegar a la sección
document.querySelectorAll('.menu-item').forEach(item => {
  item.addEventListener('click', () => {
    sideMenu.classList.add('translate-x-full');
    
    // Obtener el href del elemento y navegar a esa sección
    const targetId = item.getAttribute('href').substring(1);
    scrollToSection(targetId);
  });
});

// SOLUCIÓN: Manejar clics en elementos de categoría
document.querySelectorAll('.category-item').forEach(item => {
  item.addEventListener('click', () => {
    const category = item.getAttribute('data-category');
    if (category) {
      // Resaltar categoría seleccionada
      highlightCategory(category);
      // Desplazarse a la sección
      scrollToSection(category);
    }
  });
});

// Función para resaltar la categoría seleccionada
function highlightCategory(category) {
  // Quitar el estado activo de todas las categorías
  document.querySelectorAll('.category-item').forEach(item => {
    item.classList.remove('active');
  });
  
  // Resaltar la categoría seleccionada
  const categoryItem = document.querySelector(`.category-item[data-category="${category}"]`);
  if (categoryItem) {
    categoryItem.classList.add('active');
  }
}

// Función para desplazarse a una sección
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  } else {
    console.warn(`Sección con ID "${sectionId}" no encontrada`);
  }
}

// Funcionalidad para las imágenes de miniatura
document.querySelectorAll('.thumb-img').forEach(img => {
  img.addEventListener('click', () => {
    // Obtener el target (id de la imagen principal)
    const targetId = img.dataset.target;
    const mainImg = document.getElementById(targetId);
    
    if (mainImg) {
      // Cambiar la imagen principal
      mainImg.src = img.src;
      
      // Resaltar la miniatura seleccionada
      const thumbsInSameGroup = document.querySelectorAll(`[data-target="${targetId}"]`);
      thumbsInSameGroup.forEach(thumb => {
        thumb.classList.remove('active');
      });
      img.classList.add('active');
    }
  });
});

// Modal de imagen - actualizado para incluir imágenes de reseñas
const imageModal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-img');
const modalClose = document.getElementById('modal-close');
const modalPrev = document.getElementById('modal-prev');
const modalNext = document.getElementById('modal-next');

let currentProductImages = [];
let currentImageIndex = 0;

// Abrir modal al hacer clic en la imagen principal o en imágenes de reseñas
document.querySelectorAll('.zoomable').forEach(img => {
  img.addEventListener('click', () => {
    // Guardar referencia a las imágenes actuales
    let product, images;
    
    // Verificar si es una imagen de reseña
    if (img.classList.contains('review-img')) {
      const reviewId = img.dataset.reviewId;
      
      // Para imágenes de reseñas, solo mostrar esa imagen específica
      currentProductImages = [img.src];
      currentImageIndex = 0;
      
      // Configurar botones de navegación
      modalPrev.style.display = 'none';
      modalNext.style.display = 'none';
    } else {
      // Es una imagen de producto normal
      product = img.closest('.producto');
      currentProductImages = Array.from(product.querySelectorAll('.thumb-img')).map(thumb => thumb.src);
      
      // Si no hay miniaturas, usar solo la imagen principal
      if (currentProductImages.length === 0) {
        currentProductImages = [img.src];
      }
      
      // Encontrar el índice de la imagen actual
      currentImageIndex = currentProductImages.indexOf(img.src);
      if (currentImageIndex === -1) currentImageIndex = 0;
      
      // Mostrar botones de navegación si hay más de una imagen
      modalPrev.style.display = currentProductImages.length > 1 ? 'flex' : 'none';
      modalNext.style.display = currentProductImages.length > 1 ? 'flex' : 'none';
    }
    
    // Mostrar la imagen en el modal
    modalImg.src = img.src;
    
    // Establecer un tamaño uniforme para todas las imágenes del modal
    modalImg.style.width = 'auto';
    modalImg.style.height = 'auto';
    modalImg.style.maxWidth = '100%';
    modalImg.style.maxHeight = '70vh'; // Altura máxima para mantener proporción
    modalImg.style.objectFit = 'contain'; // Mantener proporción de aspecto
    
    imageModal.classList.remove('hidden');
  });
});

// Implementar animación para imágenes de reseñas
document.querySelectorAll('.review-img').forEach(img => {
  img.addEventListener('mouseover', () => {
    img.classList.add('review-img-hover');
  });
  
  img.addEventListener('mouseout', () => {
    img.classList.remove('review-img-hover');
  });
});

// Cerrar modal
modalClose.addEventListener('click', () => {
  imageModal.classList.add('hidden');
});

// También cerrar modal al hacer clic fuera de la imagen
imageModal.addEventListener('click', (e) => {
  if (e.target === imageModal) {
    imageModal.classList.add('hidden');
  }
});

// Navegación en el modal
modalPrev.addEventListener('click', () => {
  if (currentProductImages.length <= 1) return;
  
  currentImageIndex = (currentImageIndex - 1 + currentProductImages.length) % currentProductImages.length;
  modalImg.src = currentProductImages[currentImageIndex];
});

modalNext.addEventListener('click', () => {
  if (currentProductImages.length <= 1) return;
  
  currentImageIndex = (currentImageIndex + 1) % currentProductImages.length;
  modalImg.src = currentProductImages[currentImageIndex];
});

// Selección de tallas
document.querySelectorAll('.size-button').forEach(button => {
  button.addEventListener('click', () => {
    // Quitar la clase active de todos los botones en el mismo grupo
    const sizeButtons = button.parentElement.querySelectorAll('.size-button');
    sizeButtons.forEach(btn => btn.classList.remove('active'));
    
    // Añadir la clase active al botón seleccionado
    button.classList.add('active');
  });
});

// Selección de colores
document.querySelectorAll('.color-box').forEach(colorBox => {
  colorBox.addEventListener('click', () => {
    // Quitar la clase selected de todos los colores en el mismo grupo
    const colorBoxes = colorBox.parentElement.querySelectorAll('.color-box');
    colorBoxes.forEach(box => box.classList.remove('selected'));
    
    // Añadir la clase selected al color seleccionado
    colorBox.classList.add('selected');
  });
});

// Inicialización - Activar la primera categoría por defecto
window.addEventListener('DOMContentLoaded', () => {
  // Activar la primera miniatura de cada producto
  document.querySelectorAll('.producto').forEach(producto => {
    const firstThumb = producto.querySelector('.thumb-img');
    if (firstThumb) {
      firstThumb.classList.add('active');
    }
  });
  
  // Si hay un hash en la URL, navegar a esa categoría
  if (window.location.hash) {
    const category = window.location.hash.substring(1);
    scrollToSection(category);
    highlightCategory(category);
  }
  
  // Ajustar las reseñas para que tengan un tamaño uniforme
  formatReviews();
  
  // Inicializar los toggles de reseñas de productos
  initProductReviewsToggles();
  
  // Inicializar el estado de los detalles de producto
  initProductDetails();
});

// SOLUCIÓN: Mejorar la visualización de las mini reseñas
function initProductReviewsToggles() {
  document.querySelectorAll('.product-reviews-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
      // Encontrar el contenedor de reseñas asociado
      const reviewsContent = toggle.closest('.bg-slate-50').querySelector('.product-reviews-content');
      
      // Alternar la visibilidad
      if (reviewsContent.style.maxHeight === '0px' || !reviewsContent.style.maxHeight) {
        reviewsContent.style.maxHeight = reviewsContent.scrollHeight + 'px';
        toggle.innerHTML = 'Ocultar <i class="fas fa-chevron-up ml-1"></i>';
      } else {
        reviewsContent.style.maxHeight = '0px';
        toggle.innerHTML = 'Ver todas <i class="fas fa-chevron-down ml-1"></i>';
      }
    });
  });
}

// Corregir la función para inicializar los detalles de producto
function initProductDetails() {
    // Asegurarse de que todos los detalles del producto comiencen con altura 0
    document.querySelectorAll('.product-details').forEach(details => {
      details.style.maxHeight = '0';
      details.style.overflow = 'hidden';
      details.style.transition = 'max-height 0.3s ease-out';
      details.style.display = 'block'; // Importante: asegura que el elemento tenga display block
    });
  }
  
  // Corregir la función para inicializar los botones de expandir
  function initProductExpandButtons() {
    document.querySelectorAll('.product-expand-btn').forEach(button => {
      button.addEventListener('click', () => {
        // Obtener el contenedor de detalles del producto
        const productCard = button.closest('.card');
        const productDetails = productCard.querySelector('.product-details');
        
        // Cambiar el estado del botón y expandir/colapsar los detalles
        if (button.classList.contains('expanded')) {
          // Colapsar
          productDetails.style.maxHeight = '0';
          button.classList.remove('expanded');
          button.innerHTML = 'Ver más <i class="fas fa-chevron-down"></i>';
        } else {
          // Expandir - asegurarse de que la altura sea suficiente
          productDetails.style.maxHeight = productDetails.scrollHeight + 'px';
          button.classList.add('expanded');
          button.innerHTML = 'Ver menos <i class="fas fa-chevron-up"></i>';
        }
      });
    });
  }
  
  // Mejorar la función que maneja los toggles de reseñas
  function initProductReviewsToggles() {
    document.querySelectorAll('.product-reviews-toggle').forEach(toggle => {
      toggle.addEventListener('click', () => {
        // Encontrar el contenedor de reseñas asociado
        const reviewsContent = toggle.closest('.bg-slate-50').querySelector('.product-reviews-content');
        
        // Alternar la visibilidad
        if (reviewsContent.style.maxHeight === '0px' || !reviewsContent.style.maxHeight) {
          reviewsContent.style.maxHeight = reviewsContent.scrollHeight + 'px';
          toggle.innerHTML = 'Ocultar <i class="fas fa-chevron-up ml-1"></i>';
          
          // Si está dentro de un contenedor de detalles expandido, actualizar su altura
          const detailsContainer = toggle.closest('.product-details');
          if (detailsContainer && detailsContainer.style.maxHeight !== '0px') {
            setTimeout(() => {
              detailsContainer.style.maxHeight = detailsContainer.scrollHeight + 'px';
            }, 50);
          }
        } else {
          reviewsContent.style.maxHeight = '0px';
          toggle.innerHTML = 'Ver todas <i class="fas fa-chevron-down ml-1"></i>';
          
          // Si está dentro de un contenedor de detalles expandido, actualizar su altura
          const detailsContainer = toggle.closest('.product-details');
          if (detailsContainer && detailsContainer.style.maxHeight !== '0px') {
            setTimeout(() => {
              detailsContainer.style.maxHeight = detailsContainer.scrollHeight + 'px';
            }, 50);
          }
        }
      });
    });
  }
  
  // Inicializar los eventos cuando se carga la página
  window.addEventListener('DOMContentLoaded', () => {
    // Otras inicializaciones existentes...
    
    // Inicializar los detalles de producto primero
    initProductDetails();
    
    // Luego inicializar los botones de expandir
    initProductExpandButtons();
    
    // Y finalmente los toggles de reseñas
    initProductReviewsToggles();
    
    // Añadir una pequeña demora para permitir que todo se renderice correctamente
    setTimeout(() => {
      // Asegurarnos que las reseñas están correctamente ocultas inicialmente
      document.querySelectorAll('.product-reviews-content').forEach(content => {
        content.style.overflow = 'hidden';
        content.style.maxHeight = '0';
        content.style.transition = 'max-height 0.3s ease-out';
      });
    }, 100);
  });
