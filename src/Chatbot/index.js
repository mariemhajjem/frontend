import ReactDOM from "react-dom";
import "./styles.css";
import React, { Component } from "react";
import PropTypes from "prop-types";
import ChatBot from "react-simple-chatbot";

class Review extends Component {
  render() {
    return <div style={{ width: "100%", alignItems: "center" }}></div>;
  }
}

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

class Chatbot extends Component {
  state = {
    opened: false
  }

  toggleFloating = ({ opened }) => {
    this.setState({ opened }); 
  }
  render() {
    const { opened } = this.state;
    return (
      <ChatBot
      floating={true}
      opened={opened}
      toggleFloating={this.toggleFloating}
        steps={[
          {
            id: "1",
            component: <Review />,
            asMessage: true,
            trigger: "choose-language",
          },

          {
            id: "choose-language",
            message: "Bonjour veuillez choisir la langues qui vous convient ************************ Hello please choose the language that suits you ****************************مرحبا الرجاء اختيار اللغة التي تناسبك ",
            trigger: "languages",
          },
          {
            id: "languages",
            options: [
              { value: "Arabe", label:"عربية", trigger: "ar-questions" },
              { value: "Francais", label: "Francais", trigger: "fr-questions" },
              { value: "Anglais", label: "English", trigger: "en-questions" },
            ],
          },
          {
            id: "ar-questions",
            message: "  ?مرحبا هل تريد طرح أي سؤال",
            trigger: "ar-question-number",
          },
          {
            id: "ar-questions-other",
            message: "  ?  مرحبا هل تريد طرح أي سؤال اخر ",
            trigger: "ar-question-number",
          },
          {
            id: "fr-questions",
            message: "Voulez-vous poser une question ?",
            trigger: "fr-question-number",
          },
          {
            id: "fr-questions-other",
            message: "Voulez-vous poser une autre question ?",
            trigger: "fr-question-number",
          },
          {
            id: "en-questions",
            message: " Do u want to ask a question ?",
            trigger: "en-question-number",
          },
          {
            id: "en-questions-other",
            message: " Do u want to ask another question ?",
            trigger: "en-question-number",
          },
          {
            id: "ar-question-number",
            options: [
              { value: "yes", label: "نعم", trigger: "ar-question-yes" },
              { value: "no", label: "لا", trigger: "ar-end-message" },
            ],
          },
          {
            id: "fr-question-number",
            options: [
              { value: "yes", label: "Oui", trigger: "fr-question-yes" },
              { value: "no", label: "Non", trigger: "fr-end-message" },
            ],
          },
          {
            id: "en-question-number",
            options: [
              { value: "yes", label: "Yes", trigger: "en-question-yes" },
              { value: "no", label: "No", trigger: "en-end-message" },
            ],
          },
          {
            id: "ar-question-yes",
            message: "?عن ماذا تريد أن تستفسر",
            trigger: "ar-number",
          },
          {
            id: "fr-question-yes",
            message: "Sur quoi voulez-vous vous renseigner ?",
            trigger: "fr-number",
          },
          {
            id: "en-question-yes",
            message: "What do you want to inquire about?",
            trigger: "en-number",
          },
          {
            id: "en-number",
            options: [
              {
                value: "1",
                label: "What are the goals of vaccination?",
                trigger: "en-question 1",
              },
              {
                value: "2",
                label: "How to register for the Covid-19 vaccine?",
                trigger: "en-question 2",
              },
              {
                value: "3",
                label: "Where will the vaccination take place?",
                trigger: "en-question 3",
              },
              {
                value: "4",
                label: "Will the COVID-19 vaccine be free? ",
                trigger: "en-question 4",
              },
              {
                value: "5",
                label:"What should I do if I encounter a problem while registering?",
                trigger: "en-question 5",
              },
              
            ],
          },
          {
            id: "en-question 1",
            message:
              "The first goal of vaccination is to reduce the number of serious cases of Covid-19 and thus the number of deaths, which is confirmed by the results of clinical studies of vaccines that have proven their effectiveness.",
            trigger: "en-questions-other",
          },
          {
            id: "en-question 2",
            message:
              "Website: www.evax.tn / SMS: 85355/ USSD : *2021#",
            
            trigger: "en-questions-other",
          },
          {
            id: "en-question 3",
            message:
              "There will be 25 regional vaccination centers and about 200 regional vaccination centers to be determined by the regional authorities according to the criteria",
            trigger: "en-questions-other",
          },
          {
            id: "en-question 4",
            message:
              "Yes. Vaccination will be free for everyone in Tunisia, but according to the priority set by the authorities",
            trigger: "en-questions-other",
          },
          {
            id: "en-question 5",
            message:
              "A toll-free number was created for inquiries throughout the vaccination campaign. Toll Free: 80102021, open Monday to Friday from midnight to 5 pm",
            trigger: "en-questions-other",
          },
          
          {
            id: "fr-number",
            options: [
              {
                value: "1",
                label: "Quels sont les objectifs de la vaccination ?",
                trigger: "fr-question 1",
              },
              {
                value: "2",
                label: "Comment s'inscrire au vaccin Covid-19 ?",
                trigger: "fr-question 2",
              },
              {
                value: "3",
                label: "Où aura lieu la vaccination ?",
                trigger: "fr-question 3",
              },
              {
                value: "4",
                label: "Le vaccin COVID-19 sera-t-il gratuit ? ",
                trigger: "fr-question 4",
              },
              {
                value: "5",
                label: "Que faire si je rencontre un problème lors de mon inscription ?",
                trigger: "fr-question 5",
              },
              
            ],
          },
          {
            id: "fr-question 1",
            message:
              "Le premier objectif de la vaccination est de réduire le nombre de cas graves de Covid-19 et donc le nombre de décès, ce qui est confirmé par les résultats des études cliniques de vaccins qui se sont avérés efficaces.",
            trigger: "fr-questions-other",
          },
          {
            id: "fr-question 2",
            message:
            "Website: www.evax.tn / SMS: 85355/ USSD : *2021#",
            trigger: "fr-questions-other",
          },
          {
            id: "fr-question 3",
            message:
              "Il y aura 25 centres régionaux de vaccination et environ 200 centres régionaux de vaccination à déterminer par les autorités régionales selon les critères",
            trigger: "fr-questions-other",
          },
          {
            id: "fr-question 4",
            message:
              "Oui. La vaccination sera gratuite pour tous en Tunisie, mais selon la priorité fixée par les autorités.",
            trigger: "fr-questions-other",
          },
          {
            id: "fr-question 5",
            message:
              "Un numéro vert a été créé pour les demandes de renseignements tout au long de la campagne de vaccination. Numéro vert : 80102021, ouvert du lundi au vendredi de minuit à 17h",
            trigger: "fr-questions-other",
          },
          
          {
            id: "ar-number",
            options: [
              {
                value: "1",
                label: "ما هي أهداف التلقيح؟",
                trigger: "ar-question 1",
              },
              {
                value: "2",
                label: "ماذا أفعل إذا واجهت مشكلة أثناء التسجيل؟",
                trigger: "ar-question 2",
              },
              {
                value: "3",
                label: "أين سيتم التلقيح ؟",
                trigger: "ar-question 3",
              },
              {
                value: "4",
                label: "هل سيكون لقاح كوفيد-19 مجانيًا ؟ ",
                trigger: "ar-question 4",
              },
              {
                value: "5",
                label: "كيف يتم التسجيل للحصول على لقاح Covid-19؟",
                trigger: "ar-question 5",
              },
              
            ],
          },
          {
            id: "ar-question 1",
            message:
              "الهدف الأول من التلقيح هو تقليل عدد الحالات الخطيرة من الكوفيد-19 و بالتالي عدد الوفايات، و هو ما أكدته نتائج الدراسات السريرية للقاحات التي أثبتت فاعليتها.",
            trigger: "ar-questions-other",
          },
          {
            id: "ar-question 2",
            message:
              "تم إنشاء رقم مجاني للإستفسار طوال حملة التلقيح. الرقم المجاني: 80102021، مفتوح من الاثنين إلى الجمعة من منتصف الليل حتى الساعة 5 مساءً",
            trigger: "ar-questions-other",
          },
          {
            id: "ar-question 3",
            message:
              "سيكون هناك 25 مركزا تلقيح جهويا و حوالي 200 مركز تلقيح جهوي يتم تحديده من قبل السلطات الجهوية حسب معاييير",
            trigger: "ar-questions-other",
          },
          {
            id: "ar-question 4",
            message:
              "نعم. التلقيح سيكون مجانيا للجميع في تونس ولكن حسب الأولوية التي تحددها السلطات.",
            trigger: "ar-questions-other",
          },
          {
            id: "ar-question 5",
            message:
              "الموقع: www.evax.tn ,الرسائل القصيرة: 85355 ,USSD : *2021#",
            trigger: "ar-questions-other",
          },
          
          {
            id: "ar-end-message",
            message: "  ! وداعا",
            end: true,
          },
          {
            id: "fr-end-message",
            message: "Au revoir !",
            end: true,
          },
          {
            id: "en-end-message",
            message: "Good bye !",
            end: true,
          },
        ]}
      />
    );
  }
}

export default Chatbot;
//removing for testing
// const rootElement = document.getElementById("root");
// ReactDOM.render(<Chatbot />, rootElement);