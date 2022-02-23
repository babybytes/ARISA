
import Header from './Header'
import Landing from './Landing'
import Footer from '../components/footer/Footer'


export default function Home() {
  return (
    <div className="  w-full h-full flex flex-col">
      <div className="flex">
        <Header />
      </div>
      <div className="flex grow ">
        <Landing />
      </div>
      <div className="flex">
        <Footer />
      </div>
    </div>
  );
}
