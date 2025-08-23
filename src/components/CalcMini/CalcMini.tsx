"use client";
import React from 'react';
import './calcMini.scss';
import Link from 'next/link';

type CeilingType = 'matte' | 'glossy' | 'printed';
type LightingType = 'led' | 'spot' | 'chandelier';

const PRICING = {
  baseRatePerM2: 405, // Базовая цена матового потолка BAUF 205 (175 + 230)
  ceilingMultiplier: {
    matte: 1, // 405₽/м²
    glossy: 1.025, // 415₽/м² (185 + 230)
    printed: 1.11, // 450₽/м² (220 + 230)
  } as Record<CeilingType, number>,
  lightingAdd: {
    led: 3000,
    spot: 2000,
    chandelier: 1500,
  } as Record<LightingType, number>,
};

export default function CalcMini() {
  const [length, setLength] = React.useState<string>('4');
  const [width, setWidth] = React.useState<string>('3');
  const [ceilingType, setCeilingType] = React.useState<CeilingType>('matte');
  const [lighting, setLighting] = React.useState<LightingType>('led');

  const area = React.useMemo(() => {
    const l = parseFloat(length) || 0;
    const w = parseFloat(width) || 0;
    const a = l * w;
    return Number.isFinite(a) && a > 0 ? Number(a.toFixed(2)) : 0;
  }, [length, width]);

  const estimatedPrice = React.useMemo(() => {
    const base = area * PRICING.baseRatePerM2 * PRICING.ceilingMultiplier[ceilingType];
    const total = base + PRICING.lightingAdd[lighting];
    const calculatedPrice = Math.round(total / 100) * 100;
    return Math.max(calculatedPrice, 7500); // Минимальная цена 7500₽
  }, [area, ceilingType, lighting]);

  const formatRub = (v: number) => new Intl.NumberFormat('ru-RU').format(v);

  return (
    <div className="miniCalc">
      <div className="miniCalc__header">
        <h3 className="miniCalc__title">Калькулятор</h3>
        <span className="miniCalc__subtitle">Быстрый расчёт стоимости</span>
      </div>

      <div className="miniCalc__grid">
        <label className="miniCalc__field">
          <span className="miniCalc__label">Длина, м</span>
          <input
            className="miniCalc__input"
            type="number"
            min={1}
            step={0.1}
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
        </label>
        <label className="miniCalc__field">
          <span className="miniCalc__label">Ширина, м</span>
          <input
            className="miniCalc__input"
            type="number"
            min={1}
            step={0.1}
            value={width}
            onChange={(e) => setWidth(e.target.value)}
          />
        </label>

        <div className="miniCalc__field miniCalc__field--full">
          <span className="miniCalc__label">Тип потолка</span>
          <div className="miniCalc__pills">
            <button className={`miniCalc__pill ${ceilingType === 'matte' ? 'is-active' : ''}`} onClick={() => setCeilingType('matte')}>Матовый</button>
            <button className={`miniCalc__pill ${ceilingType === 'glossy' ? 'is-active' : ''}`} onClick={() => setCeilingType('glossy')}>Глянцевый</button>
            <button className={`miniCalc__pill ${ceilingType === 'printed' ? 'is-active' : ''}`} onClick={() => setCeilingType('printed')}>С принтом</button>
          </div>
        </div>

        <div className="miniCalc__field miniCalc__field--full">
          <span className="miniCalc__label">Освещение</span>
          <div className="miniCalc__pills">
            <button className={`miniCalc__pill ${lighting === 'led' ? 'is-active' : ''}`} onClick={() => setLighting('led')}>LED лента</button>
            <button className={`miniCalc__pill ${lighting === 'spot' ? 'is-active' : ''}`} onClick={() => setLighting('spot')}>Точечные</button>
            <button className={`miniCalc__pill ${lighting === 'chandelier' ? 'is-active' : ''}`} onClick={() => setLighting('chandelier')}>Люстра</button>
          </div>
        </div>
      </div>

      <div className="miniCalc__summary">
        <div className="miniCalc__summaryItem">
          <span>Площадь</span>
          <strong>{area || 0} м²</strong>
        </div>
        <div className="miniCalc__summaryItem">
          <span>Ориентировочно</span>
          <strong>{formatRub(estimatedPrice)}₽</strong>
        </div>
      </div>

      <Link href="/calculator" className="miniCalc__cta">
        Открыть полный калькулятор
      </Link>
    </div>
  );
}


