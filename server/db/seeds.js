const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const Product = require('../models/product');
const User = require('../models/user');
// const Order = require('../models/order');

const { dbURI } = require('../config/environment');

mongoose.connect(dbURI);

Product.collection.drop();
User.collection.drop();
// Order.collection.drop();

User
  .create([{
    first_name: 'Vino',
    last_name: 'Admin',
    email: 'admin@vino.com',
    password: 'admin',
    passwordConfirmation: 'admin',
    city: 'Adana',
    birthday: new Date("1999-09-20"),
    gender: 'Kadın'
  }, {
    first_name: 'Jane',
    last_name: 'Doe',
    email: 'janedoe@vino.com',
    password: 'a',
    passwordConfirmation: 'a',
    city: 'Ankara',
    birthday: new Date("1984-12-03"),
    gender: 'Kadın'
  }])
  .then((users) => {
      console.log(`${users.length} users created`);
      return Product
      // Product
        .create([{
          name: 'Wine Cork Mantar USB 4GB',
          description: 'Mantar usb ile şarap ürünlerinin teknolojik dünyasına adım atın. Şık ve günlük kullanımınıza uygun wine cork usb\'ler 4 GB\'lık saklama alanı sunar.\n\nŞıklığınızdan ödün vermeden çalışmalarınızı saklayabileceğiniz mantar usbler kullanım kolaylığı sağlarlar.',
          price: 30,
          image: 'https://vinosarap.com/wp-content/uploads/2017/07/Sevimli-mantar-usb-4gb.3.jpg',
          inStock: 5
        }, {
          name: 'Cork Robot - Luke',
          description: 'Çok sevimli değil mi? :)\n\nŞarabınızı yudumlamaya başladığınız anlarda şarap mantarı koleksiyonunuza bir yenisini daha eklerken mantarınızı robot karakteri formunda saklayabilir, evinizde, ofisinizde, mutfağınızda bu küçük arkadaşınız ile keyifli anlarınızı yeniden hatırlayabilirsiniz.\n\nŞarap şişelerinizi süsleyerek hediye olarak götüreceğiniz robotunuz ile şarabınıza kişisellik ve özellik katabilirsiniz. Corkers – Şarap Mantarı Robotlar! Kutusu içinden çıkan iğneli pinlerle patlatacağınız şarap mantarınızı son derece eğlenceli robota dönüştürebiliyorsunuz.',
          price: 35,
          image: 'https://vinosarap.com/wp-content/uploads/2017/08/corkers_robots_luke_01.jpg',
          inStock: 5
        }, {
          name: 'Cork Robot - Bella',
          description: 'Çok sevimli değil mi? :)\n\nŞarabınızı yudumlamaya başladığınız anlarda şarap mantarı koleksiyonunuza bir yenisini daha eklerken mantarınızı robot karakteri formunda saklayabilir, evinizde, ofisinizde, mutfağınızda bu küçük arkadaşınız ile keyifli anlarınızı yeniden hatırlayabilirsiniz.\n\nŞarap şişelerinizi süsleyerek hediye olarak götüreceğiniz robotunuz ile şarabınıza kişisellik ve özellik katabilirsiniz. Corkers – Şarap Mantarı Robotlar! Kutusu içinden çıkan iğneli pinlerle patlatacağınız şarap mantarınızı son derece eğlenceli robota dönüştürebiliyorsunuz.',
          price: 30,
          image: 'https://vinosarap.com/wp-content/uploads/2017/08/vino-%C5%9Farap-mantar%C4%B1-bella-1.jpg',
          inStock: 5
        }, {
          name: 'Cork Robot - Pino',
          description: 'Çok sevimli değil mi? :)\n\nŞarabınızı yudumlamaya başladığınız anlarda şarap mantarı koleksiyonunuza bir yenisini daha eklerken mantarınızı robot karakteri formunda saklayabilir, evinizde, ofisinizde, mutfağınızda bu küçük arkadaşınız ile keyifli anlarınızı yeniden hatırlayabilirsiniz.\n\nŞarap şişelerinizi süsleyerek hediye olarak götüreceğiniz robotunuz ile şarabınıza kişisellik ve özellik katabilirsiniz. Corkers – Şarap Mantarı Robotlar! Kutusu içinden çıkan iğneli pinlerle patlatacağınız şarap mantarınızı son derece eğlenceli robota dönüştürebiliyorsunuz.',
          price: 45,
          image: 'https://vinosarap.com/wp-content/uploads/2017/08/vino-%C5%9Farap-mantar%C4%B1-pino-2.jpg',
          inStock: 5
        }, {
          name: 'Cork Robot - Yuri',
          description: 'Çok sevimli değil mi? :)\n\nŞarabınızı yudumlamaya başladığınız anlarda şarap mantarı koleksiyonunuza bir yenisini daha eklerken mantarınızı robot karakteri formunda saklayabilir, evinizde, ofisinizde, mutfağınızda bu küçük arkadaşınız ile keyifli anlarınızı yeniden hatırlayabilirsiniz.\n\nŞarap şişelerinizi süsleyerek hediye olarak götüreceğiniz robotunuz ile şarabınıza kişisellik ve özellik katabilirsiniz. Corkers – Şarap Mantarı Robotlar! Kutusu içinden çıkan iğneli pinlerle patlatacağınız şarap mantarınızı son derece eğlenceli robota dönüştürebiliyorsunuz.',
          price: 40,
          image: 'https://vinosarap.com/wp-content/uploads/2017/07/71ziFbLKA8L._SL1500_.jpg',
          inStock: 5
        }, {
          name: 'Ahsap Şarap Kutusu',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          price: 120,
          image: 'https://www.hansonellis.com/mm5/graphics/00000001/treasure-chest-wood-wine-box-bel8_95c.jpg',
          inStock: 5
        }, ]);
      })
  .then((products) => console.log(`${products.length} vino products created.`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
