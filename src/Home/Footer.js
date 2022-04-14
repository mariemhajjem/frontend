import React from "react";
import "./Footer.css";
import { useTranslation } from "react-i18next";

const footerS = {
  background: "rgb(248, 248, 248)",
  margin: "20px",
  pading: "20px",
};
// const changeLanguage = (ln) => {
//   return () => {
//     i18n.changeLanguage(ln);
//   };
// };
function Footer() {
  const { t } = useTranslation();
  return (
    <div style={footerS}>
      <br />
      <br />
      <h5 className="hS">
        {t(
          "Lorsque vous cliquez sur le bouton Ajouter une demande d'inscription de votre formulaire de demande d'inscription sur evax.tn, vous indiquez que vous connaissez les conditions générales Politique deconfidentialité."
        )}{" "}
        <br />
        {t("Vous acceptez volontairement les termes et conditions fournis.")}
      </h5>
      <br />
      <h5 className="hS">
        {t(
          "eVAX est le résultat d'un travail et d'un engagement patriotique commun des équipes du CNI, ISIE, CIMS, ANSI, les opérateurs (TT, Ooredoo etOrange), Ministère de la Santé et le Ministère des Technologies de la Communication. Lorsque vous cliquez sur le bouton Ajouter une demande d'inscription de votre formulaire de demande d'inscription sur evax.tn, vous indiquez que vous connaissez les conditions générales. Politique de confidentialité . Vous acceptez volontairement les termes et conditions fournis. République de Tunisie - Ministère de la Santé - Portail d’inscription à la campagne de vaccination contre la COVID 19 Tous droits réservés © 2021"
        )}{" "}
      </h5>
      <br /> <br />
    </div>
  );
}
export default Footer;
