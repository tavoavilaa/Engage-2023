'use client';
import './globals.css'
import '../components/home-hero.css'
import myHomeStyles from './home.module.css'
import { Noto_Sans_JP } from 'next/font/google'
const noto = Noto_Sans_JP({ subsets: ['latin'] })

export default function Home() {
 
  return (
   <main className={`${noto.className} ${myHomeStyles.main}`}>
     <section className={`${myHomeStyles.section} ${myHomeStyles.sectionRed}`}>
     <div className="row content-height">
      <div className="col-sm-12 col-xl-4 home-left">
        <div className="home-left__logistic-data p-5">
          <div>
            <div>
              <h2 className={`${noto.className} text-white`}>June 18-21, 2023</h2>
              <h4 className={`${noto.className} text-white fw-light`}>Orlando, FL</h4>
             </div>
           </div>
          <div className="mt-3 mt-lg-5 mb-3 mb-lg-0 d-flex">
            <img className="home-slogan w-75 mx-auto mx-xl-0" src="https://images.news.avaya.com/EloquaImages/clients/AvayaInc/%7Bb5a70e41-546c-4950-9a50-4957406d42de%7D_slogan-white.png" alt="build a world one experience at time"/>
          </div>
        </div>
        <div className="cobrand-container px-5">
          <img className="cobrand-home" src="https://images.news.avaya.com/EloquaImages/clients/AvayaInc/%7Bc9b36bfd-6aac-4b8c-ab4c-a005e5db8521%7D_cobrand-IAUG.png" alt="Avaya &amp; IAUG logo"/>
        </div>
      </div>

      <div className="col-sm-12 col-xl-8 home-right d-flex justify-content-center align-items-center">
        <div className="slogan-container p-5 ">
          <div className='iframe-container mt-5'>
                <iframe className="vidyard_iframe"
                  title="Engage 2023 Orlando Speakers & Activities" 
                  src="//play.vidyard.com/FR3iuNvgGDCEC9yfhkK5st.html?&autoplay=1" 
                  allowtransparency="true" 
                  >
                </iframe>
            </div>
        </div>
      </div>



</div>
    </section>
     <section className={`${myHomeStyles.section} ${myHomeStyles.sectionTeal}`}>
      2
    </section>
     <section className={`${myHomeStyles.section} ${myHomeStyles.sectionYellow}`}>
      3
    </section>
     <section className={`${myHomeStyles.section} ${myHomeStyles.sectionOcean}`}>
      4
    </section>
     <section className={`${myHomeStyles.section} ${myHomeStyles.sectionGray}`}>
      5
    </section>
     <section className={`${myHomeStyles.section} ${myHomeStyles.sectionDenim}`}>
      6
    </section>
   </main>
  )
}
