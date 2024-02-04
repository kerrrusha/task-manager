import Header from '../components/Header';

export default function Home() {
    return (
      <>
          <Header />
          <div className="flex space-x-4 items-center md:space-x-6">
              <button className="button">+ Add New Task</button>
          </div>
      </>
    );
}
