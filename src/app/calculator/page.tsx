import React from "react";
import Calculator from "@/components/Calculator/Calculator";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Калькулятор натяжных потолков — точный онлайн расчёт",
  description: "Онлайн калькулятор: стоимость натяжного потолка с учетом материала, подсветки, ниш, углов и других опций.",
};

export default function CalculatorPage() {
  return (
    <>
      <Calculator />
      <Footer />
    </>
  )
}


