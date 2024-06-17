import './index.css'

const OurTeam = () => {
    return(
        <div className='container-five'>
            <h2 className='team'>Our Team</h2>

            <div className='our-team'>
                <div className='images'>

            <div>
               <img src= "/images/Kame.png" />
               <div className='caption'>
                <h3 className='font'>Kame Bashuna</h3>
                <p>Software Developer</p>
               </div>
            </div>

                <div>
                <img src="/images/Faith.png" />
                <div className='caption'>
                <h3 className='font'>Faith Munyao</h3>
                <p>Software Developer</p>
                </div>
                </div>

                <div>
                <img src="/images/Eshe.png" />
                <div className='caption'>
                    <h3 className='font'>Eshe Aziz</h3>
                    <p>Software Developer</p>
                </div>
                </div>
            </div>

            <div className='image-bottom'>

                <div>
                <img src='/images/Edna.png'/>
                <div className='caption'>
                    <h3 className='font'>Edna Kesa</h3>
                    <p>Software Developer</p>
                </div>
                </div>

                <div>
                <img src='/images/Susan.png'/>
                <div className='caption'>
                    <h3 className='font'>Susan Masaku</h3>
                    <p>Software Developer</p>
                </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default OurTeam