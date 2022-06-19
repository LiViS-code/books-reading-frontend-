import { TrainingPage } from '../../components/TrainingPage';
import { DesktopView } from '../../components/TrainingPage/DesktopView';

import { useMediaQuery } from '../../components/Header/hooks/useMediaQuery';

export const TrainingView = () => {
  const isMatches = useMediaQuery('(min-width: 1280px)');
  return (
    <>
      {!isMatches && <TrainingPage />}
      {/* {isMatches && <DesktopView />} */}
    </>
  );
};

export default TrainingView;
