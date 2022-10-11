export default function Card({ games, reviews, questions }) {
  return (
    <div className="w-[30%] bg-white h-[12rem] p-[2.4rem] flex items-center space-x-[1.6rem] rounded-[1rem]">
      <div className="h-[7.2rem] w-[7.2rem] bg-black rounded-[100%]"></div>
      <div className="space-y-[.4rem]">
        <h6 className="leading-none">Total Number of Games</h6>
        <h3 className="font-bold leading-none">{games.count || reviews.count || questions.count}</h3>
        <h6 className="leading-none text-green-600">View Game -></h6>
      </div>
    </div>
  );
}
