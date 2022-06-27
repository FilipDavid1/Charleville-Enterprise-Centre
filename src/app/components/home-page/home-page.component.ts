import { Component, OnInit, AfterViewInit  } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }
  ngAfterViewInit(): void {
    let reviewsChild = document.createElement('script');
      reviewsChild.src = "https://cdn.trustindex.io/loader.js?a5a435b702c941668b5eee0b04";
      reviewsChild.type = 'text/javascript';
      reviewsChild.async = true;
      reviewsChild.defer = true;
      document.getElementById('reviews')?.appendChild(reviewsChild);
  }

  checker: string = '';

  images = [
    {title: 'Second Slide', short: 'Second Slide Short', src: "https://cdn.discordapp.com/attachments/968521031809646632/971045400771452988/IMG_0016.webp"},
    {title: '', short: '', src: "https://cdn.discordapp.com/attachments/971009722788499486/971333516791009300/Untitled_Artwork.webp"},
    {title: 'Third Slide', short: 'Third Slide Short', src: "https://media.discordapp.net/attachments/968521031809646632/971046463901667398/IMG_0080.webp?width=1756&height=1171"},
    {title: '', short: '', src: "https://media.discordapp.net/attachments/971009722788499486/971333519265632308/IMG_0131.webp?width=1756&height=1171"},
    {title: 'About Us', short: '', src: "https://cdn.discordapp.com/attachments/968521031809646632/971046461167001620/IMG_0096.webp"},
  ];


  features = [
    {text: 'Free Wifi', src: "data:image/png;base64,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"},
    {text: 'Podcast studio', src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAE1UlEQVR4nO2cX4hVRRzHv2O2miiFFKS7xVJJr/VQ0B+iKKHVRe1Beigqn8JKi16iniyKnosIfImoXpJejMyKwOhBsYKolxIs19xNyqzWzR5y7/30MLdtWXbPzLl35s5Z/X2eLsyd3/x+v+85M3POmRnJMAzDMAzDMIwLDVfagToAV0vaLGmjpGFJQ52icUljkj6QtNc5d6KMh+cpwCCwG5gmTAvYAwyX9vu8ANgCTEUkfi5ngE2l/V/UAE92ruhuaQE7S8exKOlc+b0kf7YIdifUARiiu25nIc4Aa0vHNR9LSjuwAC9IWpnQ3ipJzye0l4zGTUPxU80fJV2U2HRL0rBzbjyx3Z5o4h2wRemTr47NzRns9kQTBRjJaHtDRttd0UQBrsto+9qMtruiiQJcmdH2YEbbXdHEQZic9p1zjYq5iXfABYUJUBgToDAmQGFMgMKYAIUxAQpjAhTGBCiMCVAYE6AwJkBhTIDCmACFMQEKYwIUxgQojAlQGBOgMCZAYUyAwpgAhTEBCpNFAGAF8DJwHDgLHAQ2RlafyuFTHdvAKHCo4/tx4CVgRUa/0gEsBT5bYJ3+QxH1jyTcFzCX7yPaf3iBugeApWmylBFgW0UC/gCWB+rvT5z02ewLtL0c+LOifvACqkuOLujOirLLJN0TqF+ZpB4J2V4v6dKK8rsS+iIpjwCtQPmtgfK9ETa6YVrS+4H/3BYobyfyZYYcAnwbKK+6Q9TZZP1mOndmeCNid0zoCg/FVh7g9kA/3ALWBGwM4jfWpWIyos0hoB2wc0vabOW5Aw5Lmgy0+UiVAefchKT7laYrakt60Dl3MvC/baperj8p6asE/uQHeC9wJY0BAxF2dtL7Ru0dEe0sA04EbL2bJjt9ANgakZztkbY20V13NAmMRrbxRIS9+3rLSh8BBoBTgYB+B66KtHcF8ApwLiJRLeAtAn3+LNuDwOmAzV+Ai3vLSp/BP76H2A9EbxnCD5SPAx8C3+F30091fu8DHgOGwpZm7Dngkwg/G7nJuxL8VXs2IrhgH53Rx6ci/PsLuLyUjz0BvBgR4DTwQAHfRonr0nb127dkACuB8YggzwFb++jXKPB3hF8/sVjegi5EJ9gY/sF3Cdm2keL7/Kc7bYVoA/fm8qWv4I8bi+UjIPlmbWAtcQPuf7ye2odi4F/zHq4R/Cn8bCf4sBbR9gCwA/itRvuHgGUpYm8M+Pn2WI0kgO+DnwVqHzGAn7I+R/gJdy7HiHyGSEFft+0D6yR9rvrnQbQlfSnpgKQvJB2VNKH/PzGukj8HYp2km+Xfat6k+vGdlHSHc+5ozXpd0/dzE4BrJH2svKeidMMxSSPOuSOlHckOsIZ6Y0JuDpJh4G80+DeQrxF+B5+TNvAqCQb7RQuwHj/w9ZsfgLtLx98I8OuInqF6RUIqpoBdwCWl424cwGr81PHnDImfwE9pV5eOs/HgF3dtAN4h/F2hil+Bt4ERGrqoqlHHd80HsETSDfLz+hslPRqoslvS1/LPC98455IvJUlJ4wWYC1SfKde0M+FC2OrowpgAhTEBCmMCFMYEKIwJUBgToDCLUYCqfV5Vi4IbyWIU4NMuy4wUANcz/1rO0/hPnkZu8B/c9+BXQE/il8Nb8g3DMAzDMAzDMAzDMIxG8y8fpZNLperbLwAAAABJRU5ErkJggg=="},
    {text: 'Free coffee', src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAFU0lEQVR4nO2cy4sdRRSHv5OniahhNGrER4gmolEkqAkiGBBF3SgIIogIPlA3GhHcCBEMAVFcKAREXekfIAojCFFCFFxEDTpoFmbyUiZKZqJRMxknj/m5uFdMxu6+1dNVXbd76oPZdHWdU7d+U88+VZBIJBKJXkhaJGmzpC8lDUq6O3aZZg2STNKn+j8PxC7brEDSrRmVL0lDsctWlXmxC+DI1TnPrynKJGk+8CiwBtgLvGNmf3guW/uR9GROC1BBnnmStk97fb+kpXWWvRdzYhcgIA8Bt017dgXwYoSy5BKtC+r+J94BTAGfmdmYZxc35jy/ybOfSkQRQNJ64ANgoPvosKT7zexzj27Oynm+yKOPytTeBUmaA7zPf5UPcD7wniSruzyxiTEGrAAuz3i+vJs2q4ghwHkFaUtqK0Wf0OZZUCNIAkQmhgBHCtJ+L5kn732AvBVvUZ7ZgaSdGYvarwveH5B0JCPP2wV51kk6lZHnqTC/qkFIWilp6PRNNUlX9shzu6RfTsszKOncHnmelnS0+/5JSW/OxqluJupsMa/u/jlViqQFktZIWl7CzzmSbpZ04cxLm0gkEolEonV4m5JJWgXcAiz0ZTMyY8BWM/srpBMvAkjaALxOc74xu7IPuNfMvg/loLIAkq4DvgXmVi9OX7LDzNaFMu5jL+ge2lv5AGslXRTKuA8BJjzY6HcmQxn2IcCwBxv9zGEzK9rBrYQPAX70YKOfCfoP5kOAA8BxD3b6lT0hjVcWwMxO0Qn7ayt93wIAdnuy048EbQG+Fk5tHgc2Snp22rMxYATYBnxUZbWcBOjNVQVpjwHHJL0KvGZmf5c1nrqg6iwGXgZ2SLqkbOYkgD+uB74ou2r2JcAIMO7JVpNZQckYVy8CmJlo/4rYlbuA+1xf9rl9vBu4waO9fmAb2d3rMuBO8kPgNwAfujjwLUDbeMXMtmYlSFoNDNKJ6p7OekkDZvZbLwc+QxPbOBXNXYSZ2Q/A83nJdA4G9sSnAG1rASeAn3q880lBmlMgWBIgn/1mdrLHO0XHnZy+IXgTwMwOURz53DRc9oCK4lmdorB9h6e3aSrq8ltWFqQ59Qi+BWjTQOzSAvIEmAAOujjxLUCbxgGXFpDXBQ2b2ZSLkyRAPlVagHNXnLqgbKaA/Q7v5W1VJwEqMmJmheE2kpYAF+QkxxGgexXMqE+bkahlBgRhTkm2YRxw6f+LvpRF64KgHd1QFQEm6HwfcSK1gGyqCLDHdQoKSYA8qowBpXYDUheUTWGgmaSzyf/4FF2AYSD3LrcGMOpwsd8LdKIhsthZxpn3Ey1mNi5pBLjUt+2aGJWUd93ZxcCDwMM56VPA9jLOQh0pGqa5AlwL5N5b0YNBM3PahPuXULeltGEcKMtJYFPZTEkAf2wys2/KZgolQBumomXYAmyeScYkQDX+BJ4ws2e6wWmlCXJ3jqSFdEIV23h6UsAQnXtPt7jE/hQR7PIiSXto3jWUu4BHCtLH6WxVezs9H/Jk+24aKMBMBtIqhLy0r4njQO1RHUmAMwl6HiyLkAI0cS3QKgGa2AJq74JCzoLmAseABaF8eGYSWFzmY4oPgrWA7gHufaHsB2Bv3ZUP4a8ubtI4UHv/D+EF2BXYvk++i+E0tAA7Atv3yccxnAa9R7m7J3QACHbjlCe+MrO1MRwHbQFmNglsDOnDA1N0vvG2k+4l3e9mXCPfLzwXu46CI2mOpJckHY9c2adzVNLjseumViStkvSWpIMRK/5nSW9Iuix2fUDgQbgIScuApcD8mlyeAA6Z2a81+UskEolEIpFIJBKJRCKRSCTO4B+zWfgwRkv8RgAAAABJRU5ErkJggg=="},
    {text: 'Toilets', src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAEhUlEQVR4nO2cS4gcVRiFvz8jBomBkECyGIngayOMDIIgMeIYNatEEXSvQjSIWw0EXbkQRfEB4iY+QEEX4iYSIeMwulDMRscYgmgY06JoYjQmasxrjovqicmkb3dXTd97q7v/Dxqmu2vuOVWnq+pW3f8WOI7jOI6TBQt9IWkEGAdW9FjzLLDPzA71uN1KSFoJjAGXRJI4CnxpZmfLmBqRNKV4/CPpjkgrXGY9b5J0LOJ6zvOxih/0RSwJeBsDJuKtOpcBD0dsv1seBJYn0LmdYpteRCiAy+N5SarRiWUJtVqubygAJxEeQGY8gMx4AJnxADLjAWTGA8iMB5AZDyAzHkBmPIDMeACZ8QAy4wFkxgPIjAeQmWEPYDaRzhxwsNUXsQai+4XngWuBTVw4OtYAzlRscyUXFjLMAs+YWaPrFiStTzBQvaviCvYcSbsWeLtyEW09vaCte9stP+yHoOx4AJnxADLjAWTGAwigojpwovlqWdXWXG61pM2SrqmiM+zd0BBPAJuB0eb7nyTtAHaYWUOSARuALcDdwKWAJH1CUfvaNR5Aa7YueD8KPAVslzQJXA0s/MUbcFtZIQ+gHCPAxl426OeAgn8Dn+9tvtpxCtgN/Bn4/kS7f/YACt4F1Pz7BPAWsM7MxsxsDFjX/Oz8jfk9sA1Ya2Z3URymHgK+OG+ZBvBZaTcaslsRAJJulHSPpOCEFEkrJN0v6ZbmiTi03PWS7pO0qqqZoQsgF34IyowHkJlQN3QvcGdk7SOR23ccx3Ha07IvK+lm4MPEXurEX8AUsM3MfokpFApgPfBpTOE+4RAwbmY/xxLwbmh7VgPPxRTwADoT9ZEKHkBnTsVs3APozPsxG/cA2vM18GRMgdCtiKPAZEzhmnMamAZeMrOTuc04juNEInQlvIai3mVYecfM/k4hFArgBuCrFAZqyioz+z2FUKgb+kcK8Zoi4HgqsVAAPwLHUpmoGQ0zO51KrGUAZiaG9xC0P6VYuyvhYR0PmE4p1i6A96g+Ua2f+SilWDAAMzsIfJDQSx2YMbOZlIKdbsZtJ/Lt2JrxamrBtgGY2XfAi4m85GYWeDO1aLDAdB5Jy4FvgLXx7WRlk5ntTC3acTzAzI4DD/B/+fYg8kaOjQ9dDsiY2RTwSmQvudgDPJpLvOMhaB5JyyhGiK6KZyc5+4ANZvZrLgNdD0k27w4+EtFLavYAEzk3PpQcEzaz3UC/T6wQ8Bpwq5kdzm2myqD8sz13kY4DwEYz21qXsd6uzwHzSFpCMflstNOyNeIARYXb6ynvdHZD6XnCZjYnaYb6B3AY2EkxA3LSzOYy+2lJ1YnanwNremlkEZyhGEA5AvwAfEtxgt1f143uOI5TE0r3guBc1cR1PfayWKbr0K9PgqQXEsykL8vLubdLFQapOnqLpCtymyjLIAWwFHg8t4myDFIA0Id7waAF0Hd7waAFAH22FwxiAEuBx3Kb6JaqASQp3V4EdbtGCVI1gLeB33pppIecpBhw6QsqXQnDuXKVcYqHltaFOYrqNn8WkeM4juM47fkPAOC8hisifVkAAAAASUVORK5CYII="},
    {text: 'Free parking', src: "data:image/png;base64,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"},
    {text: 'Touch Screen', src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAADDklEQVR4nO3dT29MURzG8e+PUv82WJBIJEiwkFLBKxD2DRIJEhv1Dog1i74ES2Jp6y1IREQlVkVEYiPxJ/G/lMdi2rhzOmOY6b0/bZ/Pquee23NOztN77tyZ5gyYmZmZmZlZo6JbhaRRYD+wurnhLEnfgMmImOxUOS8ASWuB68DZmge23NwELkbEl+rBFR1OvIYnvw7ngKvlwbYrQNIG4A1eduoyDWyOiE9zB4aKE7bRPvmPgVsNDGwpOwPsm/15mNYcT81VlgGUS9JUREzUN7alT9IRfgcAsLJa3+keYA1yAMkcQDIHkMwBJHMAyRxAMgeQzAEkcwDJHEAyB5DMASRzAMkcQDIHkMwBJHMAyRxAMgeQzAEkcwDJHEAyB5DMASRzAMkcQDIHkMwBJHMAyRxAMgeQzAEkcwDJHEAyB5DMASRzAMkcQDIHkMwBJHMAycqtCko7JF1oZCRL144/VfYKYJTW3kFWEy9ByRxAsl5LkPcLGlx1v6B5egXg/YIG1GG/oDa9ArAuJB0ArlQO3YmIG//ajgPo31bgZKX8sp9GfBNO5gCSeQnq313gUKX8qp9GHECfIuI98GDQdsoAPhfl45KeDdrJMrelKH+qFsqdcwN4AuyqeVDL1VNgd0Ro7kDbTXi2YhyYaXhgy8EMMF6dfOiyfb2kw8AEMELzr5TWAmsq5Y/A9z7bWgVsqJS/Al+6nFuXn8Aj4HJE3G+4738n6arajQ3Q1ljR1rzdy7P5OSCZA0jmAJI5gGQpT8KSdgLbu/Rffog9Iul9n12NlG1LOtrhvBngRUQ877OfxUHSMUmT+n89VOeAFj9JFyX9SJ7gv/FDDf4rTtfvEVtIkg4C91g8b/7NAIe7fffXQmpqQi4Xfb0FbgPvGuq/l03ACWDjbHkIuAScThvRQpL0tnKJT0vakz2mkqS9kr5Vxvm6iX5rvwIkDfP7Lwta7+2cl9TlN1J9oHU1AGyWNBwR03V2WPs9QNI6ivfAF5H1EVF+RrKg/CCWzAEka+JV0DRwqoF+6lDr+m9mZmZmluQXBJcYmKxqzz0AAAAASUVORK5CYII="},
    {text: 'Green Screen', src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAClklEQVR4nO3cvW4TQRTF8TtbUCHA8Fqk4BXgESgRHUkFRAoCmjgS4dFA6XCTRCFp/hQ2aLPMxt4vn836/DqvdmbunbOzsVI4wszMzMzMzMzMbAPAAXAB7HtOAeCapesB5vy9C3OmjkXwb6KUOs21q3M2HggcRMTriHjQdtGJuomI9ymlN00GtQngPCIeNh23I85TSo+aDChaLHIUy7TttptY7k0jg/wNGOKdqzJ0j21OgPXIAYg5ADEHIOYAxByAmAMQcwBiDkDMAYg5ADEHIOYAxByAmAMQcwBiDkDMAYg5ADEHIOYAxByAmAMQcwBiDkDMAYg5ADEHIOYAxByAmAMQcwBiDkDMAYg5ADEHIOYAxByAmAMQcwBiDkDMAYg5ADEHINY6AKC46/OU9dl7q4FAiojPlcvHuxCCvHcgAV/JOwGK8oWtFDWgSn9rex+6mAI4ringr/mEA5hzt+FOwpr0aw1SzBY17ZchTgL5J7/6Oft09FqIQM0mV3vN7U0/IbB88r9kCigq13L3TTGATXufdw5h3cTVjc7d38MeSHXpvVMI1L92itI9/2000/4WtEnv/byOgI/rJqrb6KkGsOH1XAiHbRa+WJcimd9PBvZK4y4bLzwywGWpn73S9drfjs6EsGiz8D6wAD7UHaHVPefAu9XnGXBWWnjeeOGR4fY3njNgtrp+q/fMuAI4BH4Bb7dV7PdKsU+3svCAgMfAj1Jfp+qasoDnlffeC3VNfRl9b8AT4GepwG/qmvoGnI72dE/x1VO1esjG9yoa/fHs0eh6He1TMaC+T3vXn6+fR8TLLnNMwElK6VXbwV0DWETErMscE7BIKT1rO7jrv0yPIuKq4xz32VVEfFIXYWZmZmZmZmZm98MfR6+KvsRoJNoAAAAASUVORK5CYII="}
  ];
}
