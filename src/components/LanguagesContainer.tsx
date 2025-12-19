import { useEffect, useState } from "react";
import IconContainer from "./iconContainer";

function LanguagesContainer({ languages }: { languages: any[] }) {
  const [isMobile, setIsMobile] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const MOBILE_LIMIT = 3;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 760);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const visibleLanguages =
    isMobile && !showAll ? languages.slice(0, MOBILE_LIMIT) : languages;

  const hasMore = languages.length > MOBILE_LIMIT;

  return (
    <div className="languages-wrapper">
      <div className="languages-container">
        {visibleLanguages.map((lang: any, idx: number) => (
          <IconContainer
            name={lang.name}
            icon={lang.icon}
            key={idx}
            className="small"
          />
        ))}
      </div>
      {isMobile && hasMore && (
        <button
          className="languages-toggle"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : `+${languages.length - MOBILE_LIMIT} more`}
        </button>
      )}
    </div>
  );
}
export default LanguagesContainer;