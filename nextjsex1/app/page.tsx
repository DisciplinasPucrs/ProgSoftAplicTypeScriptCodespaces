import Header from "./ui/header";
import LikeButton from "./ui/like-button";

export default function Home() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
  return (
    <div>
      <Header title="CS Girls:"/>
      <ul>
        {names.map((name)=>(
          <li key={name}>{name}</li>
        ))}
      </ul>
      <LikeButton />
    </div>
  );
}
