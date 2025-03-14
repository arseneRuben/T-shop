import React, { Component,useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Nav, NavItem, Collapse,Navbar,NavbarToggler,UncontrolledCarousel} from 'reactstrap'


const items = [
  {
      src : 'img/banniere1.jpeg',
      altText: 'Slide 1',
      key : '1'
  },
  {
      src : 'img/banniere2.png',
      altText: 'Slide 2',
      key : '2'
  },
  {
      src : 'img/banniere3.png',
      altText: 'Slide 3',
      key : '3'
  }
]

/*const Example = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className = 'img-fluid'/>
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}*/
const Example = () => <UncontrolledCarousel items={items} />


export default class Principal extends Component {
  
constructor(props){
    super(props)

    this.toggleNav = this.toggleNav.bind(this)

    this.state = {
        isOpen : false
    }
}
  toggleNav(){
    this.setState({isOpen : ! this.state.isOpen})
  }
  render() {

    return (
      <div className = 'row mt-3' id='menuWrap'>
        <div className ='col-12 col-lg-2 mx-auto mx-lg-0' id ='menuPrincipal'>
          <Navbar expand='lg' light >
            <NavbarToggler onClick={this.toggleNav} className='m-auto'/>
            <Collapse isOpen = {this.state.isOpen} navbar>
              <Nav vertical  className="text-left">
                <NavItem className='py-2'>
                  <NavLink to='/category/0' ><i class="fas fa-shoe-prints "></i> chaussure</NavLink>
                </NavItem>
                <NavItem className='py-2'>
                  <NavLink to='/category/2' ><i class="fas fa-clock"></i> montre</NavLink>
                </NavItem>
                <NavItem className='py-2'>
                  <NavLink to='/category/1' ><i class="fas fa-tshirt"></i> chemise</NavLink>
                </NavItem>
                <NavItem className='py-2'>
                  <NavLink to='/category/3' ><i class="fas fa-mobile-alt"></i> telephone</NavLink>
                </NavItem>
                <NavItem className='py-2'> 
                  <NavLink to="#" ><i class="fas fa-laptop"></i> ordinateur</NavLink>
                </NavItem>
                <NavItem className='py-2'>
                  <NavLink to="#" ><i class="fas fa-tv"></i> electronique</NavLink>
                </NavItem>
                <NavItem className='py-2'>
                  <NavLink to="#" ><i class="fas fa-blender"></i> electromenager</NavLink>
                </NavItem>
              </Nav>
          </Collapse>
        </Navbar>
        
    
      </div>

      <div className = 'col-12 col-lg-6 order-first order-lg-0 offset-lg-1' id = 'carousselPrincipal'>
        <Example />
      </div>
      <div className ='col-lg-2 p-0	d-none d-lg-block offset-1'>
        <div id='brandingPrincipal'>
          <div className='brandingItem'>
            
          </div>
          <div className='brandingItem'></div>
        </div>
      </div>
    </div>
    );
  }
}
