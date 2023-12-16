export class ReadmeItems {
  static MAX_DELAY = 64
  static MAX_SIZE = 1024

  author: string = ''
  profile: string = ''
  links: string[][] = [['', '']]
  lang: string = McVersion.JAVA.name
  versions: string[] = []
  elect_type: string = McElectType.Logic.name
  delay: number[] = [1, 5]
  size: number[] = [1, 1, 1]

  links2yaml() {
    let s: string = '['
    this.links.forEach((value) => {
      s += `[${value[0]}, ${value[1]}],`
    })
    s += ']'
    return s
  }

  links2strs() {
    let t: string[] = []
    this.links.forEach((value) => {
      t.push(`[${value[0]}](${value[1]})`)
    })
    return t
  }

  versions2str() {
    let s = ''
    this.versions.forEach((value) => {
      s += `\`${value}\`,`
    })
    return s
  }

  size2str() {
    return `${this.size[0]}x${this.size[1]}x${this.size[2]}`
  }

  delay2str() {
    return `${this.delay[0]}-${this.delay[1]}gt`
  }

  append_link() {
    this.links.push(['', ''])
  }

  remove_links(index: number) {
    if (this.links.length > 1) {
      this.links.splice(index, 1)
    }
  }
}

export const McVersion = {
  JAVA: {
    name: 'JAVA',
    versions: [
      '1.20',
      '1.19',
      '1.18',
      '1.17',
      '1.16',
      '1.15',
      '1.14',
      '1.13',
      '1.12',
      '1.11',
      '1.10',
      '1.9',
      '1.8',
      '1.7',
      '1.6',
      '1.5',
      '1.4',
      '1.3',
      '1.2',
      '1.1',
      '1.0',
    ]
  },
  BE: {
    name: 'BE',
    versions: [
      '1.20',
      '1.19',
      '1.18',
      '1.17',
      '1.16',
      '1.14',
      '1.13',
      '1.12',
      '1.11',
      '1.10',
      '1.9',
      '1.8',
      '1.7',
      '1.6',
      '1.5',
      '1.4',
      '1.3',
      '1.2',
      '1.1',
      '1.0'
    ]
  }
}

export const McElectType = {
  Logic: {
    name: '逻辑',
  },
  Arithmetic: {
    name: '算术',
  },
  Analog: {
    name: '模拟',
  },
  Hybrid: {
    name: '混合',
  },
}
