import PaintingsForm from "../../components/Form/PaintingsForm";
import usePaintingsApi from "../../hooks/usePaintingsApi";
import {
  PaintingStructure,
  PaintingWithoutId,
} from "../../store/paintings/features/paintings/types";
import ModifyPageStyled from "./ModifyPageStyled";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  loadSelectedPaintingActionCreator,
  modifyPaintingActionCreator,
} from "../../store/paintings/features/paintings/paintingsSlice";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ModifyPage = (): React.ReactElement => {
  const { paintingId } = useParams();
  const { modifyPainting, loadSelectedPainting } = usePaintingsApi();
  const { selectedPainting } = useAppSelector((state) => state.paintingsState);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const selectedPainting = await loadSelectedPainting(paintingId as string);

      dispatch(
        loadSelectedPaintingActionCreator(
          selectedPainting as PaintingStructure,
        ),
      );
    })();
  }, [paintingId, dispatch, loadSelectedPainting]);

  const updatePainting = async (painting: PaintingWithoutId) => {
    const updatePainting = await modifyPainting(selectedPainting._id, painting);

    dispatch(modifyPaintingActionCreator(updatePainting!));

    navigate("/home");
  };

  return (
    <ModifyPageStyled>
      <h2 className="page__title">Modify Form</h2>
      <PaintingsForm
        submitAction={updatePainting}
        selectedPainting={selectedPainting}
        buttonText="Edit info"
      />
    </ModifyPageStyled>
  );
};

export default ModifyPage;
