import { Button } from "@material-ui/core";
import "./Modal.css";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";

function ModalTrue({ showTrue, setShowTrue, countTrue, setCountTrue }) {
  const CountT = () => {
    setCountTrue(countTrue + 1);
  };

  if (showTrue) {
    return (
      <div id="overlay">
        <div id="content">
          <h1>
            <CheckOutlinedIcon />
            正解です!!
          </h1>
          <p>
            <Button
              variant="contained"
              onClick={() => {
                setShowTrue(false);
                CountT();
              }}
            >
              次の問題へ
            </Button>
            {/* <button
              onClick={() => {
                setShowTrue(false);
                CountT();
              }}
            > */}
            {/* Next question
            </button> */}
          </p>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default ModalTrue;
