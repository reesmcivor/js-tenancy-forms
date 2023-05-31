import forms from "js-tenancy-forms/api/forms";

export default useForm = () => {

  const getList = () => {
    try {
      const response = forms.getForms();
      if(!response.ok) {
        console.debug(response.send());
      }

      return response;

    } catch (error) {
      console.log(error);
    }
  }

  return { getList };
};
