class Section {
  constructor(name, pdfPaths) {
    this.name = name
    this.pdfPaths = pdfPaths
  }

  static create(name, pdfPaths) {
    const s = new Section(name, pdfPaths)

    return `
    <h2>${s.name}</h2>
    <div class="container">
      ${s.pdfPaths.map(
        (path) =>
          `<iframe width="600" height="1000" class="frame" src="${path}" frameborder="0"></iframe>`,
      )}
    </div>
    `
  }
}

const container = document.body

const insert = ({ name, pdfPaths }) => {
  container.insertAdjacentHTML('afterbegin', Section.create(name, pdfPaths))
}

const sections = [
  {
    name: 'Certificates',
    pdfPaths: [
      'public/MyroslavToloshnyi-KNU-MIT-11-ITE-1-certificate.pdf',
      'public/MyroslavToloshnyi-KNU-MIT-11-CCNA--certificate.pdf',
      'public/MyroslavToloshnyi-CCNA-46-3-certificate.pdf',
      'public/MyroslavToloshnyi-KNU-MIT-31-ItCS--certificate.pdf',
      'public/MyroslavToloshnyi-KNU-MIT-31-CCNA--certificate.pdf',
    ],
  },
  {
    name: 'Letters',
    pdfPaths: [
      'public/MyroslavToloshnyi-KNU-MIT-11-ITE-1-letter.pdf',
      'public/MyroslavToloshnyi-KNU-MIT-11-CCNA--letter.pdf',
      'public/MyroslavToloshnyi-CCNA-46-3-letter.pdf" frameborder',
      'public/MyroslavToloshnyi-KNU-MIT-31-CCNA--letter.pdf',
    ],
  },
]

sections.reverse().map((section) => insert(section))
