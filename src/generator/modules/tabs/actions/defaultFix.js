const defaultFix = ({ module }) => {
  const select = module.querySelector("[id*=set_id__]");
  console.log("object :>> ", select);
  select.selectedIndex = 4;
};

export default defaultFix;
