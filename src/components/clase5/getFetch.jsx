const productos = [
    {id:'1', categoria:'liquidacion', name:'issue', price :  90,img:"https://www.issue3dcolor.com/html/img/products/coloracion/keratin/color-pack/detalle-main.png"},
    {id:'2', categoria:'liquidacion', name:'sistem', price :  78,img:"https://d2r9epyceweg5n.cloudfront.net/stores/001/214/645/products/system3_rojisimos1-07cd5419a2730a07e515912160020786-480-0.jpg"},
    {id:'3', categoria:'liquidacion', name:'otowil', price :  60,img:"https://www.anikashop.com.ar/product_images/p/479/04592__98608_std.jpg"},
    {id:'4', categoria:'promo', name:'opcion', price :  55,img:"http://http2.mlstatic.com/D_601623-MLA40185916333_122019-O.jpg"},
    {id:'5', categoria:'promo', name:'loreal', price :  11,img:"https://www.loreal-paris.com.mx/-/media/project/loreal/brand-sites/oap/americas/mx/products/hair/hair-color/excellence/creme-tinte/71-rubio-cenizo/packshot/excellence-tinte-rubio-71-pack-v2.png"},
    {id:'6', categoria:'promo', name:'nov', price :  100,img:"https://www.novcosmeticacapilar.com.ar/img/img-ckcolors-coloracion.jpg"},
    {id:'7', categoria:'promo', name:'issueProfesional', price :  88,img:"http://d3ugyf2ht6aenh.cloudfront.net/stores/456/058/products/tintura-issue1-0ee1e11454f543794a15991421884291-640-0.jpg"}
]

export  const getFetch = new Promise ((resolve, reject)=>{
    // const [productos,setProductos] = useState([])
 let condition = true
 if(condition){
    resolve(productos)
 } else{
     reject('400 not found')
 }   
})
