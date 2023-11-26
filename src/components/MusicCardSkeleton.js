import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const MusicCardSkeleton = () => {
  return (
    <div>

        <p>
          <Skeleton count={3} />
        </p>
      
    </div>
  );
};

export default MusicCardSkeleton;
