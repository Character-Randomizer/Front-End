import React from 'react';
import { Link } from 'react-router-dom';

import { NonUserHeader, NonUserFooter } from './header-footer'
import StyledButtons from '../styles/buttonStyles'
import { StyledH2 } from '../styles/homeStyles'

import npcs from '../images/npcs.jpeg'


export default function Home() {
   return (
      <>
         <NonUserHeader />

         <div className="middle">
            <StyledH2>What the Randomizer Does</StyledH2>
            <p className="product">
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia porro, commodi explicabo incidunt
               doloremque dicta ipsa expedita aperiam nostrum ad libero harum aliquam officia, alias tenetur optio
               repellendus necessitatibus animi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempora
               perspiciatis accusamus? Doloribus corporis molestiae cum voluptatibus ea. Officia ut porro quas mollitia
               iusto suscipit, quia magnam minus vitae repellat. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
               Itaque tempora molestiae porro asperiores fugiat similique incidunt voluptatum rem enim dignissimos nihil
               neque cumque, temporibus ipsum aperiam accusantium laborum qui! Voluptatem? Lorem ipsum dolor sit amet
               consectetur adipisicing elit. Quaerat nostrum reiciendis repudiandae, expedita numquam neque sapiente libero
               non. Dolorem accusantium veritatis commodi assumenda repudiandae cupiditate fugiat culpa necessitatibus
               natus vitae.
               <br /> <br />
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad cumque unde rerum, iure cupiditate illum quo?
               Qui, nulla hic, voluptatibus fuga nihil minus adipisci numquam dolorum doloremque porro dignissimos quaerat.
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi aspernatur error architecto, sit
               exercitationem enim eius aperiam reprehenderit consequuntur esse nam, molestias ea quas? Aliquid nam
               repellendus possimus odio rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ipsum
               eligendi dicta consequatur sit dolor libero sequi, cumque corporis placeat autem totam impedit soluta hic
               repellat inventore illum sapiente explicabo?
            </p>

            <div className="image">
               <img src={npcs} alt="Multiple headshots of different characters" />
            </div>
            {/* eslint-disable-next-line */}
            <p className="img-text">Picture from <a href="https://thenerdd.com/2021/01/15/7-steps-to-make-a-dd-npc"
               target="_blank">thenerdd.com</a></p>


            <StyledH2>Saving Characters</StyledH2>
            <p className="saving">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt incidunt quae, nihil reiciendis aliquid in
               saepe alias voluptates, accusamus sed dolor velit nisi iusto aliquam odio, eius debitis assumenda soluta.
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere alias nobis incidunt laboriosam voluptas
               blanditiis error ex, reprehenderit, enim eveniet debitis et magni beatae amet maxime sint. Incidunt, libero?
               Asperiores?
               <br /> <br />
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, labore architecto velit nisi deserunt
               laudantium maxime hic magni laborum eius numquam non iure optio eaque totam error quibusdam culpa omnis!
            </p>

            <div className="button">
               <Link to={`/signup`}>
                  <StyledButtons className="signup">
                     Sign Up
                  </StyledButtons>
               </Link>
            </div>
         </div>

         <NonUserFooter />
      </>
   )
}