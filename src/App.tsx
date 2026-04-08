import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Candy, 
  Utensils, 
  IceCream, 
  CupSoda, 
  Package,
  Instagram, 
  Facebook, 
  MapPin, 
  Phone, 
  Clock,
  ChevronRight,
  Menu as MenuIcon,
  X,
  ShoppingBag,
  Star
} from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS } from './constants';

export default function App() {
  const [activeCategory, setActiveCategory] = useState(MENU_CATEGORIES[0].id);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'articles'>('home');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Candy': return <Candy className="w-5 h-5" />;
      case 'Utensils': return <Utensils className="w-5 h-5" />;
      case 'IceCream': return <IceCream className="w-5 h-5" />;
      case 'CupSoda': return <CupSoda className="w-5 h-5" />;
      case 'Package': return <Package className="w-5 h-5" />;
      default: return null;
    }
  };

  const renderHome = () => (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden bg-brand-pink">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-64 h-64 bg-brand-yellow rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-blue rounded-full blur-3xl animate-pulse delay-700" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 bg-brand-yellow text-brand-pink rounded-full text-sm font-bold mb-6 uppercase tracking-widest">
              Artisanal & Gourmand
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-extrabold text-white leading-tight mb-6">
              Le Goût Unique du <span className="text-brand-yellow italic">Kurtoskalács</span>
            </h1>
            <p className="text-xl text-white/90 mb-10 max-w-lg leading-relaxed">
              Découvrez la spécialité hongroise revisitée : une brioche cylindrique croustillante à l'extérieur et moelleuse à l'intérieur.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#menu" className="bg-white text-brand-pink px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl">
                Voir la Carte
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative hidden md:flex justify-center items-center"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white/20 max-w-sm">
              <img 
                src="https://image.noelshack.com/fichiers/2026/15/2/1775579888-chatgpt-image-7-avr-2026-18-27-40.jpg" 
                alt="O'KURTOS" 
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-brand-yellow rounded-2xl rotate-12 -z-10 shadow-lg" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-brand-blue rounded-full -z-10 shadow-lg" />
          </motion.div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-gray-900 mb-4">
              Notre Carte <span className="text-brand-pink italic">Gourmande</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Du salé pour le déjeuner, du sucré pour le goûter, ou une glace pour la fraîcheur. Il y en a pour tous les goûts !
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${
                  activeCategory === cat.id 
                  ? 'bg-brand-pink text-white shadow-lg shadow-brand-pink/30 scale-105' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {getIcon(cat.icon)}
                {cat.name}
              </button>
            ))}
          </div>

          {/* Menu Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="wait">
              {MENU_ITEMS[activeCategory as keyof typeof MENU_ITEMS].map((item, idx) => (
                <motion.div
                  key={`${activeCategory}-${item.name}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className={`${activeCategory === 'glaces' ? 'bg-brand-pink text-white border-none' : 'bg-white text-gray-900 border-gray-100'} rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group border`}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className={`absolute top-4 right-4 ${activeCategory === 'glaces' ? 'bg-white text-brand-pink' : 'bg-brand-yellow text-brand-pink'} font-bold px-3 py-1 rounded-full shadow-md`}>
                      {item.price}
                    </div>
                    {'bestSeller' in item && item.bestSeller && (
                      <div className={`absolute top-4 left-4 ${activeCategory === 'glaces' ? 'bg-brand-yellow text-brand-pink' : 'bg-brand-pink text-white'} font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1 text-xs uppercase tracking-wider`}>
                        <Star className="w-3 h-3 fill-current" />
                        Best Seller
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className={`text-xl font-display font-extrabold mb-2 ${activeCategory === 'glaces' ? 'text-white' : 'text-gray-900'}`}>{item.name}</h3>
                    <p className={`text-sm leading-relaxed mb-6 ${activeCategory === 'glaces' ? 'text-white/80' : 'text-gray-500'}`}>
                      {item.description}
                    </p>
                    <button className={`w-full py-3 font-bold rounded-xl transition-colors flex items-center justify-center gap-2 ${
                      activeCategory === 'glaces' 
                      ? 'bg-white text-brand-pink hover:bg-brand-yellow' 
                      : 'bg-gray-50 text-brand-pink group-hover:bg-brand-pink group-hover:text-white'
                    }`}>
                      Ajouter au panier
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative flex justify-center">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl max-w-md">
                <img 
                  src="https://image.noelshack.com/fichiers/2026/15/2/1775579888-chatgpt-image-7-avr-2026-18-27-40.jpg" 
                  alt="L'histoire d'O'KURTOS" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-2 bg-brand-yellow p-6 rounded-3xl shadow-xl hidden lg:block">
                <div className="text-brand-pink font-display text-3xl font-extrabold">100%</div>
                <div className="text-brand-pink/80 font-bold uppercase tracking-wider text-xs">Artisanal</div>
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-extrabold text-gray-900 mb-8 leading-tight">
                L'aventure <span className="text-brand-pink">O'KURTOS</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Porté par la passion d'Anaëlle Tournier, O'KURTOS est né de l'envie de faire découvrir le Kurtoskalács, ce gâteau cheminée emblématique d'Europe de l'Est, en y apportant une touche moderne et street-food.
                </p>
                <p>
                  Chaque pâte est préparée avec soin, enroulée autour d'un cylindre en bois et cuite jusqu'à obtenir cette caramélisation parfaite. Que vous soyez amateur de douceurs sucrées ou de saveurs salées originales, notre mission est de vous offrir une expérience gustative inoubliable.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-brand-pink/10 rounded-lg flex items-center justify-center shrink-0">
                      <Clock className="text-brand-pink w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Fait Minute</h4>
                      <p className="text-sm text-gray-500">Toujours frais et chaud</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-brand-yellow/20 rounded-lg flex items-center justify-center shrink-0">
                      <Utensils className="text-brand-pink w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Qualité</h4>
                      <p className="text-sm text-gray-500">Ingrédients sélectionnés</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Delivery Section */}
      <section id="contact" className="py-24 bg-brand-pink text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h2 className="text-4xl font-display font-extrabold mb-8">Retrouvez-nous</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-brand-yellow shrink-0" />
                  <div>
                    <h4 className="font-bold text-xl mb-1">Adresse</h4>
                    <p className="text-white/80">Consultez nos réseaux pour nos emplacements actuels !</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-brand-yellow shrink-0" />
                  <div>
                    <h4 className="font-bold text-xl mb-1">Téléphone</h4>
                    <p className="text-white/80">06 XX XX XX XX</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-brand-yellow shrink-0" />
                  <div>
                    <h4 className="font-bold text-xl mb-1">Horaires</h4>
                    <p className="text-white/80">Mardi - Samedi: 11h30 - 22h00<br />Dimanche: 18h00 - 22h00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 bg-white rounded-3xl p-8 md:p-12 text-gray-900 shadow-2xl">
              <h3 className="text-3xl font-display font-extrabold mb-6 text-brand-pink">Envoyez-nous un message</h3>
              <form 
                className="grid md:grid-cols-2 gap-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const name = formData.get('name');
                  const email = formData.get('email');
                  const message = formData.get('message');
                  const whatsappText = `Bonjour O'KURTOS ! Je m'appelle ${name} (${email}). Voici mon message : ${message}`;
                  const whatsappUrl = `https://wa.me/33608630644?text=${encodeURIComponent(whatsappText)}`;
                  window.open(whatsappUrl, '_blank');
                }}
              >
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-500 uppercase">Nom Complet</label>
                  <input name="name" type="text" required className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-brand-pink focus:ring-2 focus:ring-brand-pink/20 outline-none transition-all" placeholder="Votre nom" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-500 uppercase">Email</label>
                  <input name="email" type="email" required className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-brand-pink focus:ring-2 focus:ring-brand-pink/20 outline-none transition-all" placeholder="votre@email.com" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-gray-500 uppercase">Message</label>
                  <textarea name="message" rows={4} required className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-brand-pink focus:ring-2 focus:ring-brand-pink/20 outline-none transition-all" placeholder="Comment pouvons-nous vous aider ?"></textarea>
                </div>
                <button type="submit" className="md:col-span-2 bg-brand-pink text-white py-4 rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg shadow-brand-pink/20">
                  Envoyer le Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  const renderArticles = () => (
    <section className="py-24 bg-gray-50 min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-gray-900 mb-4">
            Nos <span className="text-brand-pink italic">Articles</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Découvrez l'actualité et les distinctions d'O'KURTOS.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 group cursor-pointer"
            onClick={() => window.open('https://www.bge-lpc.fr/entrepreneurs/anaelle-tournier-okurtos-concours-talents-des-cites-2024/', '_blank')}
          >
            <div className="relative h-64 overflow-hidden">
              <img 
                src="https://picsum.photos/seed/award/800/600" 
                alt="Talents des cités 2024" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              <div className="absolute top-4 left-4 bg-brand-yellow text-brand-pink font-bold px-4 py-1.5 rounded-full shadow-lg text-sm">
                Distinction
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-display font-extrabold text-gray-900 mb-4 group-hover:text-brand-pink transition-colors">
                Talents des cités 2024
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Découvrez le parcours d'Anaëlle Tournier et sa distinction au concours Talents des cités 2024 pour son projet innovant O'KURTOS.
              </p>
              <div className="flex items-center text-brand-pink font-bold gap-2">
                Lire l'article complet
                <ChevronRight className="w-5 h-5" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div 
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => {
                setCurrentView('home');
                window.scrollTo(0, 0);
              }}
            >
              <div className="w-10 h-10 bg-brand-pink rounded-full flex items-center justify-center">
                <span className="text-brand-yellow font-display text-xl font-extrabold italic">O'</span>
              </div>
              <span className="font-display text-2xl font-extrabold tracking-tighter text-brand-pink">KURTOS</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => {
                  setCurrentView('home');
                  setTimeout(() => {
                    const el = document.getElementById('menu');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className={`font-medium transition-colors ${currentView === 'home' ? 'text-brand-pink' : 'text-gray-600 hover:text-brand-pink'}`}
              >
                Notre Carte
              </button>
              <button 
                onClick={() => {
                  setCurrentView('articles');
                  window.scrollTo(0, 0);
                }}
                className={`font-medium transition-colors ${currentView === 'articles' ? 'text-brand-pink' : 'text-gray-600 hover:text-brand-pink'}`}
              >
                Article
              </button>
              <button 
                onClick={() => {
                  setCurrentView('home');
                  setTimeout(() => {
                    const el = document.getElementById('about');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="text-gray-600 hover:text-brand-pink font-medium transition-colors"
              >
                Notre Histoire
              </button>
              <button 
                onClick={() => {
                  setCurrentView('home');
                  setTimeout(() => {
                    const el = document.getElementById('contact');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="text-gray-600 hover:text-brand-pink font-medium transition-colors"
              >
                Contact
              </button>
              <button className="bg-brand-pink text-white px-6 py-2.5 rounded-full font-bold hover:bg-opacity-90 transition-all flex items-center gap-2 shadow-lg shadow-brand-pink/20">
                <ShoppingBag className="w-4 h-4" />
                Commander
              </button>
            </div>

            {/* Mobile Toggle */}
            <button 
              className="md:hidden p-2 text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                <button 
                  onClick={() => {
                    setCurrentView('home');
                    setIsMenuOpen(false);
                    setTimeout(() => {
                      const el = document.getElementById('menu');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }} 
                  className="block w-full text-left text-lg font-medium text-gray-900"
                >
                  Notre Carte
                </button>
                <button 
                  onClick={() => {
                    setCurrentView('articles');
                    setIsMenuOpen(false);
                    window.scrollTo(0, 0);
                  }} 
                  className="block w-full text-left text-lg font-medium text-gray-900"
                >
                  Article
                </button>
                <button 
                  onClick={() => {
                    setCurrentView('home');
                    setIsMenuOpen(false);
                    setTimeout(() => {
                      const el = document.getElementById('about');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }} 
                  className="block w-full text-left text-lg font-medium text-gray-900"
                >
                  Notre Histoire
                </button>
                <button 
                  onClick={() => {
                    setCurrentView('home');
                    setIsMenuOpen(false);
                    setTimeout(() => {
                      const el = document.getElementById('contact');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }} 
                  className="block w-full text-left text-lg font-medium text-gray-900"
                >
                  Contact
                </button>
                <button className="w-full bg-brand-pink text-white px-6 py-3 rounded-xl font-bold">
                  Commander Maintenant
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="flex-grow">
        {currentView === 'home' ? renderHome() : renderArticles()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div 
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => {
                setCurrentView('home');
                window.scrollTo(0, 0);
              }}
            >
              <div className="w-8 h-8 bg-brand-pink rounded-full flex items-center justify-center">
                <span className="text-brand-yellow font-display text-lg font-extrabold italic">O'</span>
              </div>
              <span className="font-display text-xl font-extrabold tracking-tighter text-white">KURTOS</span>
            </div>
            
            <div className="flex gap-6">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-pink transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-pink transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>

            <p className="text-gray-500 text-sm">
              © 2026 O'KURTOS. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
