import { GamePlatforms } from "@/actions/games-action";

const getPlatformKey = (name: string) => {
  if (name.includes("PC")) return "pc";
  if (name.includes("PlayStation") || name.includes("PS")) return "playstation";
  if (name.includes("Nintendo")) return "nintendo";
  if (name.includes("Xbox")) return "xbox";
  if (name.includes("macOs") || name.includes("iOs")) return "ios";
  if (name.includes("Android")) return "android";
  if (name.includes("Game Boy")) return "gameboy";
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
      platform.map((p) => getPlatformKey(p.platform.name)).filter(Boolean)
    )
  );

  return uniquePlatforms;
};

export const gameRating = (rating: number) => {
  if (rating < 1) {
    return rating.toFixed(0);
  }

  return rating.toFixed(1);
};
