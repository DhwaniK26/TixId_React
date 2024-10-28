import React from 'react'
import '../style.css'
import Spider2 from '../../News/components/images/spider1.png'

import Circlebtn from '../../TicketList/components/circlebtn';
import { GoThumbsup } from "react-icons/go";
import Titles from './titles';
import Media from './media';

export default function MainArticle() {
  return (
    <div>
      <div className='mainart-div'>

        <Titles  newsname={'Spider-Man: No Way Home Releases New Trailer'}
         newsdate={'17 Nov 2021 | TIX ID'}/>

        <img src={Spider2}/>
        
        <div className='news-text'>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet quis vitae molestie eleifend in. Proin volutpat id congue diam. Gravida lorem augue senectus nunc et, sagittis in mattis feugiat. Pharetra eleifend eget pellentesque faucibus laoreet. Fames amet hac quis suscipit proin amet. Neque rutrum nam parturient ac. Egestas ut vestibulum ac diam odio malesuada potenti. Donec vitae consequat consequat ornare ante et pulvinar. Diam vitae neque ridiculus diam at posuere volutpat. Donec in pellentesque diam congue.
          </p>
          <br></br>

          <p>Ultrices malesuada diam condimentum risus. In velit justo eu ac amet fusce lorem urna. Quis sed neque sed duis. Eleifend purus nam at cras nisi, vitae. Eleifend mollis sem odio morbi faucibus. Adipiscing in libero pharetra odio quam. Suspendisse tortor, viverra odio ultrices.
            Eu arcu odio neque malesuada ut blandit sit. In justo, suspendisse sit faucibus morbi egestas ut facilisis egestas. Turpis non amet massa a, elit, in. Lectus at elementum, a nullam in. Commodo magna senectus malesuada ut rhoncus in. Placerat arcu congue faucibus auctor purus, fringilla praesent maecenas</p>
          <br></br>

          <p>
          Quis sed lobortis sed amet nec eu, dolor. Elementum in integer sagittis tellus scelerisque imperdiet felis sit mauris. Scelerisque nunc, nullam malesuada leo odio malesuada lobortis egestas. Neque at fringilla morbi nulla facilisi tellus sit lobortis cursus. Venenatis at aliquet auctor ut elit, urna. Consequat quis risus turpis amet.
          </p>
         </div>

         <Media />      

        <div className='center'>
          <Circlebtn text={ <><GoThumbsup /> 263</> } />
        </div>

        <h3 className='center'>See Other articles</h3>

      </div>

      
    </div>
  )
}
