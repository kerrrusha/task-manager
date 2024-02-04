import Header from '../components/Header';
import KanbanBoard from "../components/KanbanBoard";

export default function Home() {
    return (
      <div className="home">
          <Header />
          <KanbanBoard />
      </div>
    );
}
