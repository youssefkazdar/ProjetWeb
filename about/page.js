import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center">
        <div className="text-center mb-8">
          <p>Présentation de "Kazdar": Votre Compagnon Ultime pour les Achats d'Occasion

Vous êtes passionné par la mode durable ? Vous aimez dénicher des pièces uniques à des prix imbattables ? Ne cherchez plus, "Kazdar" est là pour vous - votre application incontournable pour tous vos achats d'occasion.

"Kazdar" révolutionne votre manière de magasiner les vêtements en ligne. Avec notre plateforme conviviale, vous pouvez parcourir une vaste collection d'articles vestimentaires préaimés depuis le confort de votre foyer. Que vous recherchiez des trésors vintage, des marques de créateurs ou des basiques du quotidien, "Kazdar" a quelque chose pour tout le monde.

Voici ce qui distingue "Kazdar" des autres :<br></br>
 **Collections Curatées** : Notre équipe d'experts en mode sélectionne soigneusement chaque article pour garantir qualité et style. Découvrez des pièces uniques que vous ne trouverez nulle part ailleurs.<br></br>



</p>
        </div>

        <div className="flex justify-center space-x-8 mb-8">
          <div className="text-center">
            <Image src="/mia.jpg" alt="Image 1" width={150} height={150} className="rounded-full" />
            <p className="mt-2 font-bold">Mia</p>
          </div>
          <div className="text-center">
            <Image src="/me.jpg" alt="Image 2" width={150} height={150} className="rounded-full" />
            <p className="mt-2 font-bold">YOUSSEF</p>
          </div>
          <div className="text-center">
            <Image src="/karmen.jpg" alt="Image 3" width={150} height={150} className="rounded-full" />
            <p className="mt-2 font-bold">Karmen</p>
          </div>
        </div>
        

        <div className="text-center">
          <p>Prêt à vous lancer dans votre aventure de shopping d'occasion ? Téléchargez "Kazdar" dès aujourd'hui et débloquez un monde de style abordable et durable à portée de main. Joyeux shopping !</p>
        </div>
      </div>
    </div>
  );
}

export default About;
