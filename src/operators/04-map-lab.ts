import { fromEvent, map, tap } from 'rxjs';
const texto = document.createElement('div');
texto.innerHTML = `
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, eius ut! Omnis voluptatum numquam aut saepe soluta doloremque non porro, ad dolor. Quae, asperiores nam magni totam perspiciatis error voluptas maiores reprehenderit quasi sed! Ut quia ipsa ad voluptatum qui non, voluptates natus aspernatur. Autem, dolores? Tempore, ex esse. Ad id sunt ratione magnam cumque incidunt voluptates expedita asperiores iste nam. Est ea fuga sint officiis laudantium iste nostrum veniam totam? Iusto consectetur amet atque itaque quos quidem fugit adipisci cupiditate blanditiis dolore. Architecto sit ducimus doloremque, accusamus incidunt expedita voluptates unde odio illo quis voluptatibus animi quas? Sapiente placeat unde aliquid minima delectus ab? 
<br/><br/>
Quaerat at repellat possimus. Ut harum expedita vel, adipisci debitis sequi nemo! Quam perspiciatis esse amet ea dignissimos corrupti odio harum exercitationem quia, autem laboriosam ad unde cumque veniam blanditiis iure, pariatur saepe quaerat quisquam corporis nostrum aliquid. Magni excepturi corporis ut, dolores possimus totam voluptas, tenetur perspiciatis porro sed soluta ducimus modi expedita tempore ad quos blanditiis non. Perferendis, commodi explicabo odio animi, eum alias quibusdam aspernatur incidunt magnam adipisci placeat fugiat harum sed praesentium debitis necessitatibus accusantium dolores asperiores atque minus similique totam numquam suscipit. 
<br/><br/>
Consequatur, non molestiae odit similique ipsum porro atque, aperiam earum hic quam inventore cupiditate est exercitationem totam quo. Nemo illum vero magni repellat eius tempora, aliquam quam, quis consequatur, voluptatem impedit. Eaque possimus voluptates ea voluptatibus, dolores officiis animi numquam laborum delectus vel cumque quae harum tenetur pariatur repellendus vitae porro, ipsam deleniti? Illum dignissimos porro, quae magnam tempora et reprehenderit obcaecati neque fugit unde totam sint enim facilis animi ea amet, quis quaerat nisi ullam! Laboriosam deleniti beatae, reiciendis molestias quibusdam aperiam aliquam odio dicta ipsa officiis commodi labore sint tempora tenetur facilis hic voluptates necessitatibus pariatur, itaque laborum eveniet soluta? Fuga reprehenderit magnam velit qui, nulla fugit aut, corporis, dignissimos itaque obcaecati illo iure unde? 
<br/><br/>
Architecto tempora explicabo perferendis itaque accusamus nemo pariatur, sint debitis sed nesciunt quas fugit, recusandae soluta dicta, maiores nisi? Velit dignissimos ex voluptates quaerat dolorum, aspernatur suscipit vitae provident minus, repellendus, laudantium sit deserunt enim sint. Iste veritatis exercitationem maxime debitis perspiciatis animi reprehenderit adipisci aut iusto accusamus, delectus consequatur cumque odit amet, distinctio doloremque a, quos aperiam excepturi? Non ea hic dolores assumenda inventore! Ea nulla consequuntur harum similique voluptatibus optio velit omnis recusandae quibusdam, molestiae assumenda, et odio beatae numquam, doloribus reiciendis. Minima omnis aliquid qui veritatis aut odit commodi, obcaecati delectus distinctio! Nesciunt doloribus quod labore ipsum ad aspernatur rerum at, maxime porro totam ea debitis dignissimos? Necessitatibus at fugit animi natus debitis dolores dolorem perferendis dicta eligendi iste provident autem, ad, et expedita optio, quis sapiente. 
<br/><br/>
Dignissimos distinctio maiores ullam ex nisi deserunt odit temporibus asperiores fugiat doloribus iure labore ut numquam fuga perspiciatis, nesciunt fugit quis voluptatem veniam odio? Magnam voluptatum quibusdam dolore aliquid facilis nostrum inventore id quidem ipsum, impedit rem, dolor, magni distinctio ratione perspiciatis natus libero corrupti doloremque maiores! Iste nobis dolor voluptatum quos consequuntur, blanditiis unde fugit nam recusandae ex? Aliquid, incidunt?
`

const body = document.querySelector('body');
body.append( texto );

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');

body.append( progressBar );

// función que haga el cálculo
const scrollCalc = ( e ) => {

  const {
    scrollTop,
    scrollHeight,
    clientHeight
  } = e.target.documentElement;

  return ( scrollTop / ( scrollHeight - clientHeight ) ) * 100
}
// Streams
const scroll$ = fromEvent( document, 'scroll' );
//scroll$.subscribe( console.log );

const progress$ = scroll$.pipe(
  map( scrollCalc ),
  tap( console.log )
);

progress$.subscribe( porcentaje => {
  progressBar.style.width = `${ porcentaje }%`;
});
