import './index.css'

const Products = ()=>{
    return(
    
        <div>
            <h2 className='title'>Products</h2>
            <div className="Products">
                <div className='products1'> 
                <img src ="/images/chondo.jpeg" alt='' id='product'/><br></br>
                <img src='/images/leatherbag.jpeg' alt='' id='product'/><br></br>
                <img src='/images/lizarddoll.jpeg'alt='' id='product'/>
            </div><br></br>
            <div className='products2'> 
             <img src='/images/fishdoll.jpeg' alt='' id='fish'/>
             <img src='/images/pillow.jpeg' alt='' id='pillow'/>
             </div> 
        </div>
        <div className='products'>
        <h4>Why Upcycle</h4>
        <div id='point1'>
        <img src='/images/recyclebin.jpeg'alt='' id='bin'/>
        <div id='explanation'>
        <h3>Reduce Waste and Conserve Resources</h3>
        <p>Upcycling clothes helps reduce the staggering amount<br></br>of textile waste generated by the fashion industry.</p>
        </div>
        </div><br></br>
        <div id='point2'>
        <img src='/images/reccleshirt.png' alt='' id='shirt'/>
        <div id='explanation2'>
        <h3>Support Sustainable Fashion</h3>
        <p>Upcycling is a key component of sustainable fashion, which<br></br> 
         prioritizes reducing waste, conserving resources, and promoting<br></br> 
         eco-friendly practices. </p> 
         </div>
        </div>
        <div id='point3'>
            <img src='./images/recyclebulb.png' alt='' id='bulb'/>
        <div id='explanation3'> 
        <h3>Give Old Clothes a New Life</h3>
        <p>Up cycling gives old clothes a second chance, extending their life<br></br>
        and reducing the need for new, resource-intensive garments. </p>
        </div>
       
        </div>
        </div>
        </div>
        
        
    )
}
export default Products;