<h1 align="center"> password-entropy-thermostat </h1>

<p align="center">
  <a href="https://travis-ci.com/BrunoCasotto/password-entropy-thermostat"><img src="https://travis-ci.com/BrunoCasotto/password-entropy-thermostat.svg?branch=master" alt="Build Status"></a>
  <a href="https://www.npmjs.com/package/password-entropy-thermostat"><img src="https://img.shields.io/npm/v/password-entropy-thermostat" alt="Version"></a>
  <a href="https://www.npmjs.com/package/password-entropy-thermostat"><img src="https://img.shields.io/npm/l/password-entropy-thermostat.svg" alt="License"></a>
  <a href="https://codecov.io/gh/BrunoCasotto/password-entropy-thermostat"><img src="https://codecov.io/gh/BrunoCasotto/password-entropy-thermostat/branch/master/graph/badge.svg" alt="CodeCov"></a></p>

Um projeto desenvolvido em javascript que calcula a complexidade de uma senha.


## Utilização
Instalação:

``` npm i --save password-entropy-thermostat ```

Uso:


```
import PasswordEntropyThermostat from 'password-entropy-thermostat'
const result = PasswordEntropyThermostat.measurePassword('myPassword')
```


Resposta da lib

```
Password level:
{
    "results": [
        {
            "method": "minLengthValue",
            "value": 0.1
        },
        {
            "method": "lengthValue",
            "value": 0.2
        },
        {
            "method": "hasNumberAndLetter",
            "value": 0.2
        },
        {
            "method": "hasSpecialChar",
            "value": 0
        },
        {
            "method": "capitalAndSmallChar",
            "value": 0
        },
        {
            "method": "sequenceAndPatterns",
            "value": 0
        }
    ],
    "value": 0.5
}
```

Configurar peso dos cálculos <br>
Para configurar quanto cada validação corresponde para segurança da senha basta chamar o método setWeight e passar o objeto de configuração com os pesos. (valor máximo somado deve ser 1).

```
const config = {
    minLengthValue: 0.2,
    lengthValue: 0.2,
    hasNumberAndLetter: 0.2,
    hasSpecialChar: 0.2,
    capitalAndSmallChar: 0.1,
    sequenceAndPatterns: 0.1
}

PassEntropyThermostat.setWeight(config)
```
