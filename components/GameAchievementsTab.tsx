import { GameAchievements } from "@/actions/games-action";
import { RAWGResponse } from "./utils/interfaceTypes";

interface Props {
  achievements: RAWGResponse<GameAchievements>;
}

const GameAchievementsTab = ({ achievements }: Props) => {
  return <div>GameAchievementsTab</div>;
};

export default GameAchievementsTab;
