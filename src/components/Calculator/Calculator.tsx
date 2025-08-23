"use client";
import React from "react";
import Link from "next/link";
import { City } from '../../types/city';
import "./calculator.scss";

type CeilingMaterial = "matte" | "glossy" | "satin" | "fabric";

type CalculatorState = {
  roomLengthM: string;
  roomWidthM: string;
  material: CeilingMaterial;
  isTwoLevel: boolean;
  fixturesCount: string;
  ledStripMeters: string;
  nicheMeters: string;
  pipeCutouts: string;
  extraCorners: string;
  printAreaM2: string;
};

const MATERIAL_PRICE_PER_M2: Record<CeilingMaterial, number> = {
  matte: 405, // BAUF 205 матовый (175 + 230)
  glossy: 415, // BAUF 205 глянцевый (185 + 230)
  satin: 405, // BAUF 205 сатиновый (175 + 230)
  fabric: 880, // LumFer фактурный (650 + 230)
};

const ADD_ON_PRICES = {
  twoLevelMultiplier: 1.22,
  fixturePerUnit: 700,
  ledPerMeter: 550,
  nichePerMeter: 750,
  pipeCutoutPerUnit: 350,
  extraCornerPerUnit: 120,
  printPerM2: 900,
  minOrder: 7500,
};

function formatRub(amount: number): string {
  return new Intl.NumberFormat("ru-RU").format(amount);
}

interface CalculatorProps {
  city?: City;
  content?: {
    title: string;
    description: string;
  };
}

export default function Calculator({ city, content }: CalculatorProps): React.ReactElement {
  const [state, setState] = React.useState<CalculatorState>({
    roomLengthM: "4.0",
    roomWidthM: "3.0",
    material: "matte",
    isTwoLevel: false,
    fixturesCount: "4",
    ledStripMeters: "0",
    nicheMeters: "0",
    pipeCutouts: "0",
    extraCorners: "0",
    printAreaM2: "0",
  });

  const areaM2 = React.useMemo(() => {
    const length = parseFloat(state.roomLengthM) || 0;
    const width = parseFloat(state.roomWidthM) || 0;
    const area = length * width;
    return Number.isFinite(area) && area > 0 ? Number(area.toFixed(2)) : 0;
  }, [state.roomLengthM, state.roomWidthM]);

  const breakdown = React.useMemo(() => {
    const basePerM2 = MATERIAL_PRICE_PER_M2[state.material];
    let base = areaM2 * basePerM2;
    if (state.isTwoLevel) base *= ADD_ON_PRICES.twoLevelMultiplier;

    const fixturesQty = parseInt(state.fixturesCount) || 0;
    const ledMeters = parseFloat(state.ledStripMeters) || 0;
    const nicheMeters = parseFloat(state.nicheMeters) || 0;
    const pipesQty = parseInt(state.pipeCutouts) || 0;
    const cornersQty = parseInt(state.extraCorners) || 0;
    const printArea = parseFloat(state.printAreaM2) || 0;

    const fixtures = fixturesQty * ADD_ON_PRICES.fixturePerUnit;
    const led = ledMeters * ADD_ON_PRICES.ledPerMeter;
    const niche = nicheMeters * ADD_ON_PRICES.nichePerMeter;
    const pipes = pipesQty * ADD_ON_PRICES.pipeCutoutPerUnit;
    const corners = cornersQty * ADD_ON_PRICES.extraCornerPerUnit;
    const print = printArea * ADD_ON_PRICES.printPerM2;

    const subtotal = Math.round(
      base + fixtures + led + niche + pipes + corners + print
    );
    const total = Math.max(subtotal, ADD_ON_PRICES.minOrder);

    return {
      base,
      fixtures,
      led,
      niche,
      pipes,
      corners,
      print,
      subtotal,
      total,
    } as const;
  }, [areaM2, state]);

  const onChange = <K extends keyof CalculatorState>(key: K, value: CalculatorState[K]) => {
    setState((prev) => ({ ...prev, [key]: value }));
  };

  const whatsappText = React.useMemo(() => {
    const parts = [
      "Здравствуйте! Хочу расчёт натяжного потолка:",
      `Комната: ${state.roomLengthM}×${state.roomWidthM} м (≈ ${areaM2} м²)`,
      `Материал: ${
        {
          matte: "Матовый ПВХ",
          glossy: "Глянцевый ПВХ",
          satin: "Сатиновый ПВХ",
          fabric: "Тканевый",
        }[state.material]
      }${state.isTwoLevel ? ", двухуровневый" : ""}`,
      `Светильники: ${parseInt(state.fixturesCount) || 0} шт.`,
      (parseFloat(state.ledStripMeters) || 0) > 0 ? `LED: ${state.ledStripMeters} м` : "",
      (parseFloat(state.nicheMeters) || 0) > 0 ? `Ниша под карниз: ${state.nicheMeters} м` : "",
      (parseInt(state.pipeCutouts) || 0) > 0 ? `Обводы труб: ${state.pipeCutouts} шт.` : "",
      (parseInt(state.extraCorners) || 0) > 0 ? `Доп. углы: ${state.extraCorners} шт.` : "",
      (parseFloat(state.printAreaM2) || 0) > 0 ? `Печать: ${state.printAreaM2} м²` : "",
              `Итого ориентировочно: ${formatRub(breakdown.total)}₽`,
    ].filter(Boolean);
    return encodeURIComponent(parts.join("\n"));
  }, [areaM2, state, breakdown.total]);

  return (
    <section className="calc">
      <div className="container">
        <div className="calc__wrap">
          <div className="calc__left">
            <header className="calc__header">
              <h1 className="calc__title">{content?.title || `Калькулятор натяжных потолков ${city ? `в ${city.name}` : ''}`}</h1>
              <p className="calc__sub">Точный предварительный расчёт с учётом всех опций {city ? `для ${city.nameGenitive}` : ''}</p>
            </header>

            <div className="calc__grid">
              <label className="calc__field">
                <span className="calc__label">Длина комнаты, м</span>
                <input
                  className="calc__input"
                  type="number"
                  min={1}
                  step={0.1}
                  value={state.roomLengthM}
                  onChange={(e) => onChange("roomLengthM", e.target.value)}
                />
              </label>

              <label className="calc__field">
                <span className="calc__label">Ширина комнаты, м</span>
                <input
                  className="calc__input"
                  type="number"
                  min={1}
                  step={0.1}
                  value={state.roomWidthM}
                  onChange={(e) => onChange("roomWidthM", e.target.value)}
                />
              </label>

              <div className="calc__field calc__field--full">
                <span className="calc__label">Материал</span>
                <div className="calc__pills">
                  {([
                    ["matte", "Матовый ПВХ"],
                    ["glossy", "Глянцевый ПВХ"],
                    ["satin", "Сатиновый ПВХ"],
                    ["fabric", "Тканевый"],
                  ] as const).map(([key, label]) => (
                    <button
                      key={key}
                      className={`calc__pill ${state.material === key ? "is-active" : ""}`}
                      onClick={() => onChange("material", key)}
                      type="button"
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <label className="calc__check">
                <input
                  type="checkbox"
                  checked={state.isTwoLevel}
                  onChange={(e) => onChange("isTwoLevel", e.target.checked)}
                />
                <span>Двухуровневый потолок</span>
              </label>

              <label className="calc__field">
                <span className="calc__label">Светильники, шт.</span>
                <input
                  className="calc__input"
                  type="number"
                  min={0}
                  step={1}
                  value={state.fixturesCount}
                  onChange={(e) => onChange("fixturesCount", e.target.value)}
                />
              </label>

              <label className="calc__field">
                <span className="calc__label">LED-подсветка, м</span>
                <input
                  className="calc__input"
                  type="number"
                  min={0}
                  step={0.5}
                  value={state.ledStripMeters}
                  onChange={(e) => onChange("ledStripMeters", e.target.value)}
                />
              </label>

              <label className="calc__field">
                <span className="calc__label">Ниша под карниз, м</span>
                <input
                  className="calc__input"
                  type="number"
                  min={0}
                  step={0.5}
                  value={state.nicheMeters}
                  onChange={(e) => onChange("nicheMeters", e.target.value)}
                />
              </label>

              <label className="calc__field">
                <span className="calc__label">Обводы труб, шт.</span>
                <input
                  className="calc__input"
                  type="number"
                  min={0}
                  step={1}
                  value={state.pipeCutouts}
                  onChange={(e) => onChange("pipeCutouts", e.target.value)}
                />
              </label>

              <label className="calc__field">
                <span className="calc__label">Дополнительные углы, шт.</span>
                <input
                  className="calc__input"
                  type="number"
                  min={0}
                  step={1}
                  value={state.extraCorners}
                  onChange={(e) => onChange("extraCorners", e.target.value)}
                />
              </label>

              <label className="calc__field calc__field--full">
                <span className="calc__label">Печать на полотне, м²</span>
                <input
                  className="calc__input"
                  type="number"
                  min={0}
                  step={0.5}
                  value={state.printAreaM2}
                  onChange={(e) => onChange("printAreaM2", e.target.value)}
                />
              </label>
            </div>
          </div>

          <aside className="calc__right">
            <div className="calc__card">
              <div className="calc__priceRow">
                <span>Площадь</span>
                <strong>{areaM2} м²</strong>
              </div>
              <div className="calc__priceRow">
                <span>База</span>
                <strong>{formatRub(Math.round(breakdown.base))}₽</strong>
              </div>
              {breakdown.fixtures > 0 && (
                <div className="calc__priceRow"><span>Светильники</span><strong>{formatRub(breakdown.fixtures)}₽</strong></div>
              )}
              {breakdown.led > 0 && (
                <div className="calc__priceRow"><span>LED</span><strong>{formatRub(breakdown.led)}₽</strong></div>
              )}
              {breakdown.niche > 0 && (
                <div className="calc__priceRow"><span>Ниша под карниз</span><strong>{formatRub(breakdown.niche)}₽</strong></div>
              )}
              {breakdown.pipes > 0 && (
                <div className="calc__priceRow"><span>Обводы труб</span><strong>{formatRub(breakdown.pipes)}₽</strong></div>
              )}
              {breakdown.corners > 0 && (
                <div className="calc__priceRow"><span>Доп. углы</span><strong>{formatRub(breakdown.corners)}₽</strong></div>
              )}
              {breakdown.print > 0 && (
                <div className="calc__priceRow"><span>Печать</span><strong>{formatRub(breakdown.print)}₽</strong></div>
              )}
              <div className="calc__divider" />
              <div className="calc__totalRow">
                <span>Итого ориентировочно</span>
                <strong>{formatRub(breakdown.total)}₽</strong>
              </div>

              <div className="calc__ctaWrap">
                <a
                  className="calc__btn calc__btn--accent"
                  href={`https://wa.me/79999999999?text=${whatsappText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Отправить расчёт в WhatsApp
                </a>
                <a className="calc__btn calc__btn--ghost" href="tel:+79895234952">Позвонить и уточнить</a>
              </div>

                              <p className="calc__hint">Минимальная стоимость заказа — {formatRub(ADD_ON_PRICES.minOrder)}₽. Итог зависит от проектных особенностей помещения.</p>

              <div className="calc__miniLink">
                <span>Нужно быстро?</span>
                <Link href="/" className="calc__miniAnchor">Откройте мини‑калькулятор на главной</Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}


