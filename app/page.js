import Banner from "./(components)/Banner";
import Counter from "./(components)/Counter";
import Faq from "./(components)/Faq";
import Feature from "./(components)/Feature";
import FutureTechnology from "./(components)/FutureTechnology";
import Greetings from "./(components)/Greetings";


export default function Home() {
  return (
   <>
    <Banner/>
    <Counter/>
    <Greetings/>
    <Feature/>
    <FutureTechnology/>
    <Faq/>
   </>
  );
}
