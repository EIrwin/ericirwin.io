# cert-manager 
**cert-manager** is used for Kubernetes certificate management and TLS and is installed and managed through helm.rb

## Installation

```bash

helm repo add jetstack https://charts.jetstack.io

helm install \
  cert-manager jetstack/cert-manager \
  --namespace cert-manager \
  --version v1.1.0 \
  --set installCRDs=true
```

# ingress-controller deployment
```
helm -n default install nginx-ingress ingress-nginx/ingress-nginx
```
