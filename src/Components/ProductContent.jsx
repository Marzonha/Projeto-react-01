
import styles from './ProductContent.module.css'

export function ProductContent() {
  return (
    <>
    <div className={styles.titleProductContent}>


    <h1 className={styles.TP} >Produtos Usados</h1>
    <div>
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div className="ratio ratio-1x1">
        <img  className={styles.Pimg} src="https://images.unsplash.com/photo-1589872131197-bdd7256dd867?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block w-100" alt="..."/>
      </div>
    </div>
    <div class="carousel-item">
      <div className="ratio ratio-1x1">
       <img className={styles.Pimg}   src="https://segredosdomundo.r7.com/wp-content/uploads/2020/06/apollo-11-origem-e-missao-que-levou-o-homem-a-lua-1.jpg" class="d-block w-100" alt="..."/>
      </div>
    </div>
    <div class="carousel-item">
      <div className="ratio ratio-1x1">
      <img  className={styles.Pimg}  src="https://www.institutoclaro.org.br/educacao/wp-content/uploads/sites/2/2013/11/Homem-na-lua_2.jpg" class="d-block w-100" alt="..."/>
    </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

     {/* Produtos Cards */}

     <div class="row row-cols-1 row-cols-md-3 g-5">
  <div class="col">
    <div class="card h-100">
      <img  src="..." class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img  src="https://images.unsplash.com/photo-1516849677043-ef67c9557e16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a short card.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img  src="https://media.istockphoto.com/id/1338031708/pt/foto/engineer-and-technician-working-on-satellite-construction-aerospace-agency-diverse-team-of.jpg?s=1024x1024&w=is&k=20&c=v11UJDNGMQ2VpEyiRH6v9tnbvTj5uBkp1nYdmYpMIMg=" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img  src="https://media.istockphoto.com/id/172770317/pt/foto/voo-em-manuten%C3%A7%C3%A3o.jpg?s=1024x1024&w=is&k=20&c=PsQoA7mnRM85xZozMwGafVIROsbiptDb5BKMsd8Jlvg=" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>

     {/* Produtos Cards */}
    </div>  
</div>
    </>
  )
}

