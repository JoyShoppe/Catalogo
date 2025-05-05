/* Suavizar transiciones globales */
* {
    transition: all 0.3s ease-in-out;
  }
  
  /* Botones */
  button, a.button, .boton {
    transition: background-color 0.3s ease, transform 0.2s ease;
  }
  
  button:hover, a.button:hover, .boton:hover {
    transform: scale(1.03);
  }
  
  /* Sombra sutil para tarjetas de productos */
  .card {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    border-radius: 1rem;
    overflow: hidden;
  }
  
  /* Hover para productos */
  .producto:hover {
    transform: scale(1.02);
    box-shadow: 0 10px 20px rgba(84, 105, 122, 0.2);
  }
  
  /* Hover imágenes miniatura */
  .thumb-img:hover {
    border: 2px solid #475569;
  }
  
  .thumb-img.active {
    border: 2px solid #475569;
    transform: scale(1.1);
  }
  
  /* Reseñas carrusel */
  .reseña {
    transition: transform 0.3s ease;
  }
  .reseña:hover {
    transform: scale(1.02);
  }
  
  /* Colores personalizables para cuadros */
  .color-box {
    width: 20px;
    height: 20px;
    border-radius: 9999px;
    border: 2px solid white;
    box-shadow: 0 0 0 1px rgba(0,0,0,0.1);
    cursor: pointer;
  }
  
  .color-box:hover {
    transform: scale(1.2);
  }
  
  .color-box.selected {
    transform: scale(1.2);
    box-shadow: 0 0 0 2px #475569;
  }
  
  /* Animación para el logo */
  .logo-pulse {
    animation: pulse 2s infinite;
  }
  
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
  
  /* Categoría activa */
  .category-active {
    transform: scale(1.05);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }
  
  /* Banner flotante */
  .floating-banner {
    animation: float 3s ease-in-out infinite;
  }
  
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }
  
  /* Efecto de ondas en botones */
  .ripple {
    position: relative;
    overflow: hidden;
  }
  
  .ripple:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10, 10);
    opacity: 0;
    transition: transform .5s, opacity 1s;
  }
  
  .ripple:active:after {
    transform: scale(0, 0);
    opacity: .3;
    transition: 0s;
  }
  
  /* Botón de talla activo */
  .size-button.active {
    background-color: #475569;
    color: white;
    border-color: #475569;
  }
  
  /* Animación de entrada para productos */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .producto {
    animation: fadeInUp 0.5s ease-out;
  }
  
  /* Estilos para scroll snap */
  .snap-x {
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
  }
  
  .snap-start {
    scroll-snap-align: start;
  }
  
  /* Scroll personalizado */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 10px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: #94a3b8;
  }
  
  /* Mostrar botones de navegación solo cuando se hace hover en la imagen */
  .producto .image-nav-buttons {
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .producto:hover .image-nav-buttons {
    opacity: 1;
  }
  
  /* Animación para notificaciones */
  @keyframes slideIn {
    from {
      transform: translateY(-100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  
  .notification {
    animation: slideIn 0.3s ease forwards;
  }
  
  /* Estilo para cuando un producto se añade al carrito */
  .added-to-cart {
    position: relative;
    overflow: hidden;
  }
  
  .added-to-cart::before {
    content: "✓ Añadido";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-color: #10b981;
    color: white;
    text-align: center;
    line-height: 30px;
    height: 30px;
    z-index: 1;
    transform: translateY(-100%);
    animation: slideDown 0.5s forwards;
  }
  
  @keyframes slideDown {
    to {
      transform: translateY(0);
    }
  }
  /* Estilos para imágenes de reseñas */
.review-img {
  border: 2px solid transparent;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.review-img:hover, .review-img.review-img-hover {
  transform: scale(1.05);
  border-color: #475569;
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
}

/* Añadir un indicador visual para señalar que es clickeable */
.review-img::after {
  content: "\f00e"; /* Código de Font Awesome para lupa */
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  position: absolute;
  bottom: 2px;
  right: 2px;
  background-color: rgba(71, 85, 105, 0.8);
  color: white;
  width: 16px;
  height: 16px;
  font-size: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.review-img:hover::after {
  opacity: 1;
}
/* Estilos para la notificación de envío gratuito */
#free-delivery-notification {
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
  }
  
  #free-delivery-notification.show {
    transform: translateY(0);
  }
  /* Estilos para categorías elegantes */
.category-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: transform 0.3s ease;
  width: 80px;
}

.category-item:hover {
  transform: translateY(-5px);
}

.category-circle {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(145deg, #f5f5f5, #ffffff);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.category-circle::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 50%);
  border-radius: 50%;
}

.category-circle i {
  font-size: 24px;
  transition: all 0.3s ease;
}

.category-label {
  font-size: 0.85rem;
  font-weight: 500;
  color: #475569;
  text-align: center;
  transition: color 0.3s ease;
}

.category-item:hover .category-circle {
  transform: scale(1.08);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.category-item:hover .category-label {
  color: #334155;
  font-weight: 600;
}

/* Estilo para categoría activa */
.category-item.active .category-circle {
  background: linear-gradient(145deg, #f0f9ff, #e0f2fe);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(203, 213, 225, 0.5);
}

.category-item.active .category-circle i {
  color: #0369a1;
}

.category-item.active .category-label {
  color: #0369a1;
  font-weight: 600;
}
.product-details {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
}

.product-expand-btn {
  display: block;
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.5rem;
  background-color: #f1f5f9;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  color: #1e293b;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.product-expand-btn:hover {
  background-color: #e2e8f0;
}

.product-expand-btn i {
  margin-left: 0.25rem;
  transition: transform 0.3s ease;
}

.product-expand-btn.expanded i {
  transform: rotate(180deg);
}
/* Estilos para las tarjetas de productos */
.card {
  transition: transform 0.2s, box-shadow 0.2s;
  overflow: hidden;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

/* Estilos para las imágenes de producto */
.product-image-container {
  position: relative;
  overflow: hidden;
  margin-bottom: 12px;
  border-radius: 8px;
}

.image-container {
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
}

.product-image {
  transition: transform 0.3s ease;
  max-height: 300px;
}

.product-image:hover {
  transform: scale(1.05);
}

/* Estilos para las miniaturas */
.thumbnails-container {
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding-bottom: 8px;
  -ms-overflow-style: none;  /* IE y Edge */
  scrollbar-width: none;  /* Firefox */
}

.thumbnails-container::-webkit-scrollbar {
  display: none; /* Chrome, Safari y Opera */
}

.thumb-img {
  border: 2px solid transparent;
  transition: border-color 0.2s, transform 0.2s;
  cursor: pointer;
}

.thumb-img.active {
  border-color: #1e293b;
  transform: scale(1.05);
}

.thumb-img:hover {
  border-color: #94a3b8;
}

/* Estilos para los colores */
.color-box {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: inline-block;
  cursor: pointer;
  border: 2px solid transparent;
  transition: transform 0.2s, border-color 0.2s;
}

.color-box:hover {
  transform: scale(1.1);
}

.color-box.selected {
  border-color: #1e293b;
  transform: scale(1.1);
}

/* Estilos para los botones de talla */
.size-button {
  transition: background-color 0.2s, color 0.2s, transform 0.1s;
}

.size-button:hover:not([disabled]) {
  transform: translateY(-2px);
}

.size-button.active {
  background-color: #1e293b !important;
  color: white !important;
  border-color: #1e293b !important;
}

/* Estilos para las categorías */
.category-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 80px;
  text-decoration: none;
  color: #1e293b;
  transition: transform 0.2s;
}

.category-item:hover {
  transform: translateY(-3px);
}

.category-circle {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #f1f5f9;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  font-size: 1.5rem;
  transition: background-color 0.2s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.category-item:hover .category-circle {
  background-color: #e2e8f0;
}

.category-item.active .category-circle {
  background-color: #1e293b;
  color: white;
}

.category-label {
  font-size: 0.875rem;
  font-weight: 500;
}

/* Scroll horizontal sin barra */
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* Animación para el logo */
.logo-pulse {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }
}

/* Efecto ripple para botones */
.ripple {
  position: relative;
  overflow: hidden;
}

.ripple:after {
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
  background-repeat: no-repeat;
  background-position: 50%;
  transform: scale(10, 10);
  opacity: 0;
  transition: transform 0.5s, opacity 1s;
}

.ripple:active:after {
  transform: scale(0, 0);
  opacity: 0.3;
  transition: 0s;
}

/* Animación para imágenes de reseñas */
.review-img {
  transition: transform 0.3s ease;
}

.review-img-hover {
  transform: scale(1.05);
}

/* Estilos para las reseñas */
.reviews-carousel {
  position: relative;
  padding: 0 10px;
}

.reviews-container {
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  padding: 10px 0;
}

.reviews-indicators {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 12px;
}

/* Estilos para los botones de expandir */
.product-expand-btn {
  display: block;
  width: 100%;
  background-color: #f1f5f9;
  color: #64748b;
  border: none;
  border-radius: 4px;
  padding: 8px;
  margin-top: 12px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}

.product-expand-btn:hover {
  background-color: #e2e8f0;
  color: #475569;
}

.product-details {
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.3s ease-out;
}

/* SOLUCIÓN: Estilos mejorados para las reseñas de productos */
.product-reviews-content {
  transition: max-height 0.3s ease-out;
  overflow: hidden;
}

/* Asegurarse de que las imágenes de reseñas sean visibles */
.review-img {
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

/* Mejorar la visualización de las mini-reseñas */
.product-reviews-toggle {
  padding: 2px 4px;
  border-radius: 4px;
  background-color: #f8fafc;
  transition: background-color 0.2s;
}

.product-reviews-toggle:hover {
  background-color: #e2e8f0;
}

/* Estilos para cuando las reseñas están expandidas */
.product-reviews-content.expanded {
  max-height: 500px !important;
}
