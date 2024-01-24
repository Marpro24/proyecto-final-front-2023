import { useEffect } from "react";
import HomepageStyled from "./HomepageStyled";
import { loadPaintingsActionCreator } from "../../store/paintings/features/paintings/paintingsSlice";
import PaintingsList from "../../components/PaintingsList/PaintingsList";
import { useAppDispatch } from "../../store/hooks";
import usePaintingsApi from "../../hooks/usePaintingsApi";

const Homepage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getPaintingsApi } = usePaintingsApi();

  useEffect(() => {
    window.scrollTo(0, 0);

    (async () => {
      const paintings = await getPaintingsApi();

      if (paintings) {
        dispatch(loadPaintingsActionCreator(paintings.paintings));
      }
    })();
  }, [dispatch, getPaintingsApi]);

  return (
    <HomepageStyled>
      <h2 className="section-title">Homepage</h2>
      <PaintingsList />
    </HomepageStyled>
  );
};

export default Homepage;
