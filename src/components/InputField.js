import DownArrow from "../../public/images/down-arrow.png";

const InputField = ({ onSerachInputChange }) => {
  const inputFields = [
    {
      name: "Name",
      width: "100%",
      color: "",
    },
    {
      name: "Age",
      width: "45%",
    },
    {
      name: "Height",
      width: "53%",
    },
    {
      name: "Are you a gym member?",
      width: "100%",
      showArrow: true,
    },
    {
      name: "Do you eat meat?",
      width: "100%",
      showArrow: true,
    },
    {
      name: "Are you a cyclist?",
      width: "100%",
      showArrow: true,
    },
  ];
  return (
    <div>
      {inputFields.map((val) => {
        return (
          <span className="relative">
            <input
              placeholder={val.name}
              onChange={onSerachInputChange}
              className="border rounded-full p-3 w-[100%] mb-4 font-semibold"
              style={{
                width: val.width,
                marginRight: val.width == "45%" ? "5px" : "",
                color: val.showArrow ? "#000" : "#D9D9D9"
              }}
            ></input>
            <div className="absolute right-[15px] top-[0px]">
              {val.showArrow ? <img src={DownArrow} /> : ""}
            </div>
          </span>
        );
      })}
    </div>
  );
};

export default InputField;
