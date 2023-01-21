import { SelectOptionType } from '../../components/form/inputs/Select';

const subdivision = {
  Bengo: {
    name: 'Bengo',
    counties: [
      'Ambriz',
      'Bula Atumba',
      'Dande',
      'Dembos',
      'Nambuangongo',
      'Pango Aluquém',
    ],
  },
  Benguela: {
    name: 'Benguela',
    counties: [
      'Balombo',
      'Baía Farta',
      'Benguela',
      'Bocoio',
      'Caimbambo',
      'Catumbela',
      'Chongorói',
      'Cubal',
      'Ganda',
      'Lobito',
    ],
  },
  Bié: {
    name: 'Bié',
    counties: [
      'Andulo',
      'Camacupa',
      'Catabola',
      'Chinguar',
      'Chitembo',
      'Cuemba',
      'Cunhinga',
      'Cuíto',
      'Nharea',
    ],
  },
  Cabinda: {
    name: 'Cabinda',
    counties: ['Belize', 'Buco-Zau', 'Cabinda', 'Cacongo'],
  },
  'Cuando Cubango': {
    name: 'Cuando Cubango',
    counties: [
      'Calai',
      'Cuangar',
      'Cuchi',
      'Cuito Cuanavale',
      'Dirico',
      'Mavinga',
      'Menongue',
      'Nancova',
      'Rivungo',
    ],
  },
  'Cuanza Norte': {
    name: 'Cuanza Norte',
    counties: [
      'Ambaca',
      'Banga',
      'Bolongongo',
      'Cambambe',
      'Cazengo',
      'Golungo Alto',
      'Gonguembo',
      'Lucala',
      'Quiculungo',
      'Samba Caju',
    ],
  },
  'Cuanza Sul': {
    name: 'Cuanza Sul',
    counties: [
      'Amboim',
      'Cassongue',
      'Cela',
      'Conda',
      'Ebo',
      'Libolo',
      'Mussende',
      'Porto Amboim',
      'Quibala',
      'Quilenda',
      'Seles',
      'Sumbe',
    ],
  },
  Cunene: {
    name: 'Cunene',
    counties: [
      'Cahama',
      'Cuanhama',
      'Curoca',
      'Cuvelai',
      'Namacunde',
      'Ombadja',
    ],
  },
  huambo: {
    name: 'Huambo',
    counties: [
      'Bailundo',
      'Cachiungo',
      'Caála',
      'Ecunha',
      'Huambo',
      'Londuimbali',
      'Longonjo',
      'Mungo',
      'Chicala-Choloanga',
      'Chinjenje',
      'Ucuma',
    ],
  },
  Huíla: {
    name: 'Huíla',
    counties: [
      'Caconda',
      'Cacula',
      'Caluquembe',
      'Chiange',
      'Chibia',
      'Chicomba',
      'Chipindo',
      'Cuvango',
      'Humpata',
      'Jamba',
      'Lubango',
      'Matala',
      'Quilengues',
      'Quipungo',
    ],
  },
  Luanda: {
    name: 'Luanda',
    counties: [
      'Belas',
      'Cacuaco',
      'Cazenga',
      'Ícolo e Bengo',
      'Luanda',
      'Quilamba Quiaxi',
      'Quissama',
      'Talatona',
      'Viana',
    ],
  },
  'Lunda Norte': {
    name: 'Lunda Norte',
    counties: [
      'Cambulo',
      'Capenda-Camulemba',
      'Caungula',
      'Chitato',
      'Cuango',
      'Cuílo',
      'Lóvua',
      'Lubalo',
      'Lucapa',
      'Xá-Muteba',
    ],
  },
  'Lunda Sul': {
    name: 'Lunda Sul',
    counties: ['Cacolo', 'Dala', 'Muconda', 'Saurimo'],
  },
  Malanje: {
    name: 'Malanje',
    counties: [
      'Cacuso',
      'Calandula',
      'Cambundi-Catembo',
      'Cangandala',
      'Caombo',
      'Cuaba Nzoji',
      'Cunda-Dia-Baze',
      'Luquembo',
      'Malanje',
      'Marimba',
      'Massango',
      'Mucari',
      'Quela',
      'Quirima',
    ],
  },
  Moxico: {
    name: 'Moxico',
    counties: [
      'Alto Zambeze',
      'Bundas',
      'Camanongue',
      'Léua',
      'Luau',
      'Luacano',
      'Luchazes',
      'Cameia',
      'Moxico',
    ],
  },
  Namibe: {
    name: 'Namibe',
    counties: ['Bibala', 'Camucuio', 'Moçâmedes', 'Tômbua', 'Virei'],
  },
  Uíge: {
    name: 'Uíge',
    counties: [
      'Alto Cauale',
      'Ambuíla',
      'Bembe',
      'Buengas',
      'Bungo',
      'Damba',
      'Milunga',
      'Mucaba',
      'Negage',
      'Puri',
      'Quimbele',
      'Quitexe',
      'Sanza Pombo',
      'Songo',
      'Uíge',
      'Zombo',
    ],
  },
  Zaire: {
    name: 'Zaire',
    counties: ['Cuimba', 'Mabanza Congo', 'Nóqui', 'Nezeto', 'Soio', 'Tomboco'],
  },
};

export function getAllProvinces() {
  const provincesKeys = Object.keys(subdivision);
  const provinces = provincesKeys.map((provinceKey) => {
    return subdivision[provinceKey as keyof typeof subdivision].name;
  });
  return provinces;
}

export function mapToSelectList(provinces?: string[]): SelectOptionType[] {
  let _provinces = provinces;
  if (!_provinces) _provinces = getAllProvinces();
  return _provinces.map((province) => {
    const value = province.toLowerCase().split(' ').join('_');
    return {
      label: province,
      value,
    };
  });
}