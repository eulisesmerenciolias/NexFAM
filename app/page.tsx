const features = [
  { icon: "💬", title: "Conversar", detail: "Habla o escribe con tu compañero familiar." },
  { icon: "👤", title: "Mi espacio", detail: "Cada integrante tendrá su espacio privado." },
  { icon: "🤝", title: "En familia", detail: "Comparte información solo con los permisos adecuados." },
  { icon: "🧭", title: "Organizar", detail: "Ideas, tareas y recordatorios para el día a día." }
];

export default function Home() {
  return (
    <main className="shell">
      <header className="topbar"><div className="brand"><span className="brand-mark">N</span><span>NexFAM</span></div><span className="status"><i /> Primera versión</span></header>
      <section className="hero">
        <div className="eyebrow">INTELIGENCIA PARA ESTAR MÁS CERCA</div>
        <h1>Una familia.<br /><span>Un compañero.</span></h1>
        <p className="intro">Un espacio inteligente para conversar, organizarse y aprender juntos, respetando la privacidad de cada integrante.</p>
        <div className="hero-actions"><a className="primary" href="#funciones">Conocer NexFAM <span>→</span></a><span className="pilot">Familia piloto · 5 integrantes</span></div>
        <div className="orb orb-one" /><div className="orb orb-two" />
      </section>
      <section id="funciones" className="features">
        <div className="section-heading"><div><div className="eyebrow">QUÉ PODRÁS HACER</div><h2>Un apoyo para cada día</h2></div><p>Responde cuando lo necesites y también podrá sugerir ayuda en el momento oportuno.</p></div>
        <div className="grid">{features.map((feature) => <article className="feature" key={feature.title}><div className="feature-icon">{feature.icon}</div><h3>{feature.title}</h3><p>{feature.detail}</p></article>)}</div>
      </section>
      <footer><span>NexFAM</span><span>Privacidad, confianza y colaboración familiar.</span></footer>
    </main>
  );
}
