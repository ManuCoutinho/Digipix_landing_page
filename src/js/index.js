import Glide from '@glidejs/glide'


new Glide('.glide', {
  type: "carousel", 
  slidesToShow: 2,
  slidesToScroll: 2,
  draggable: true,
  width: '100%',
  perView: 2,
  gap: 38,  
  focusAt: "center"
}).mount()
