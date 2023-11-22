import Head from "next/head";
import Link from "../src/components/Link";
import PageTitle from "../src/components/PageTitle";
import FAQScreen from '../src/screens/FAQScreen';
export default FAQScreen; 

export async function getStaticProps() {
    const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json'
    const faq = await fetch(FAQ_API_URL)
        .then((respostaDoServidor) => {
            return respostaDoServidor.json();
        })
        .then((resposta) => {
            return resposta;
        });

    return {
        props: {
            qualquercoisa: 'que eu passar aqui',
            faq
        },
    };
}

// export default function FAQPage({ faq }) {

//     return (
//         <div>
//             <PageTitle>
//                 Alura Cases - Campanha
//             </PageTitle>
//             <h1>Bem vindo ao FAQ</h1>
//             <Link href="/" passHref>
//                 Ir para a Pagina Inicial
//             </Link>
//             <ul>
//                 {faq.map(({ answer, question }) => (
//                     <li key={question}>
//                         <article>
//                             <h2>{question}</h2>
//                             <p>{answer}</p>
//                         </article>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     )
// }
