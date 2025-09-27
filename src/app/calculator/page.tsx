import React from "react";
import Calculator from "@/components/Calculator/Calculator";


export const metadata = {
  title: "Калькулятор натяжных потолков — точный онлайн расчёт",
  description: "Онлайн калькулятор: стоимость натяжного потолка с учетом материала, подсветки, ниш, углов и других опций.",
  keywords: "калькулятор потолков, расчет стоимости потолка, онлайн калькулятор, цена потолка",
  openGraph: {
    title: "Калькулятор натяжных потолков — точный онлайн расчёт",
    description: "Онлайн калькулятор: стоимость натяжного потолка с учетом материала, подсветки, ниш, углов и других опций.",
    type: "website",
    locale: "ru_RU",
    url: "https://potolkivip-rnd.ru/calculator",
  },
  alternates: {
    canonical: "https://potolkivip-rnd.ru/calculator",
  },
};

export default function CalculatorPage() {
  return (
    <>
      <Calculator />
      
    </>
  )
}


