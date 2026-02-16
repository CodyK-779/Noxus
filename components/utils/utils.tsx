import { GamePlatforms } from "@/actions/games-action";
import { Award, Sparkles, Star, Trophy } from "lucide-react";

const getPlatformKey = (name: string) => {
  if (name.includes("PC")) return "pc";
  if (name.includes("PlayStation") || name.includes("PS")) return "playstation";
  if (name.includes("Nintendo")) return "nintendo";
  if (name.includes("Xbox")) return "xbox";
  if (
    name.includes("macOS") ||
    name.includes("iOS") ||
    name.includes("Classic Macintosh") ||
    name.includes("Apple II")
  )
    return "ios";
  if (name.includes("Android")) return "android";
  if (
    name.includes("Game Boy") ||
    name.includes("GameCube") ||
    name.includes("Wii")
  )
    return "gameboy";
  return null;
};

export const platformIconByKey = (key: string | null) => {
  switch (key) {
    case "pc":
      return <i className="ri-windows-fill"></i>;
    case "playstation":
      return <i className="ri-playstation-line"></i>;
    case "nintendo":
      return <i className="ri-switch-line"></i>;
    case "xbox":
      return <i className="ri-xbox-fill"></i>;
    case "ios":
      return <i className="ri-apple-fill"></i>;
    case "android":
      return <i className="ri-android-fill"></i>;
    case "gameboy":
      return <i className="ri-gamepad-fill"></i>;
    default:
      return null;
  }
};

export const platformIcons = (platform: GamePlatforms[]) => {
  const uniquePlatforms = Array.from(
    new Set(
      platform.map((p) => getPlatformKey(p.platform.name)).filter(Boolean),
    ),
  );

  return uniquePlatforms;
};

export const gameRating = (rating: number) => {
  if (rating < 1) {
    return rating.toFixed(0);
  }

  return rating.toFixed(1);
};

export const convertPlatformArray = (platforms: GamePlatforms[]) => {
  return platforms?.map((p) => p.platform.name);
};

export const getRarityDetails = (percent: number) => {
  if (percent >= 40) {
    return {
      label: "Common",
      color: "text-gray-400",
      bgColor: "bg-gray-500/20",
      borderColor: "border-gray-500/30",
      icon: <Trophy className="size-3" />,
      barColor: "bg-gray-500",
    };
  } else if (percent >= 20) {
    return {
      label: "Rare",
      color: "text-blue-500",
      bgColor: "bg-blue-500/20",
      borderColor: "border-blue-500/30",
      icon: <Star className="size-3" />,
      barColor: "bg-blue-500",
    };
  } else if (percent >= 10) {
    return {
      label: "Epic",
      color: "text-purple-400",
      bgColor: "bg-purple-500/20",
      borderColor: "border-purple-500/30",
      icon: <Sparkles className="size-3" />,
      barColor: "bg-purple-500",
    };
  } else {
    return {
      label: "Legendary",
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/20",
      borderColor: "border-yellow-500/30",
      icon: <Award className="size-3" />,
      barColor: "bg-yellow-500",
    };
  }
};
