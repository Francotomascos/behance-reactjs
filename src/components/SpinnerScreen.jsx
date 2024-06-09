import { Spinner } from "react-bootstrap";

export default function SpinnerScreen() {
    return (
        <div className="position-fixed top-0 start-0 end-0 bottom-0 overflow-hidden w-100 h-100 d-flex justify-content-center align-items-center spinner-container" >
            <Spinner variant="light" animation="border" role="status" size="xxl"></Spinner>
        </div>
    );
}