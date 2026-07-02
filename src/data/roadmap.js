export const COLORS = {
  purple: '#8b5cf6',
  blue: '#3b82f6',
  teal: '#14b8a6',
  orange: '#f97316',
  pink: '#ec4899',
};

export const COLOR_CYCLE = ['purple', 'blue', 'teal', 'orange', 'pink'];

export const PRIORITY_META = {
  must:      { emoji: '\u{1F534}', label: 'Must-Do First' },
  important: { emoji: '\u{1F7E1}', label: 'Important' },
  good:      { emoji: '\u{1F535}', label: 'Good to Have' },
  later:     { emoji: '\u{1F7E3}', label: 'Specialization / Later' },
};

export const PRIORITY_BORDER = {
  must: '#ef4444',
  important: '#f59e0b',
  good: '#06b6d4',
  later: '#a855f7',
};

const RAW_ROADMAP = [
{title:'Foundations & Prerequisites', desc:'Environment, shell, and version control every engineer needs first', icon:'🧰', level:'Beginner', priority:'must', groups:[
  {items:['Linux (Ubuntu / Kali / WSL)','VS Code + extensions','Terminal basics (bash / zsh)','Git & GitHub workflow (init, commit, branch, PR, .gitignore)','pip, venv / conda','Markdown basics']}
]},
{title:'Programming', desc:'Master the languages and tooling behind every AI system', icon:'💻', level:'Beginner', priority:'must', groups:[
  {name:'Languages', items:['Python (must master)','C (fundamentals)','C++ (DSA & performance)','Git & GitHub','Linux','VS Code']},
  {name:'Core Topics', items:['Variables & data types','Loops','Functions','OOP','File handling','Exception handling','Modules & packages','Virtual environments','Decorators & generators ★','Type hints ★']}
]},
{title:'Mathematics', desc:'The mathematical bedrock behind every model', icon:'🧮', level:'Beginner-Intermediate', priority:'must', groups:[
  {name:'Linear Algebra', items:['Vectors','Matrices','Matrix multiplication','Eigenvalues','Eigenvectors','Singular Value Decomposition (SVD) ★','Norms ★']},
  {name:'Calculus', items:['Limits','Derivatives','Partial derivatives','Gradients','Chain rule','Integrals','Jacobian & Hessian ★']},
  {name:'Probability & Statistics', items:["Probability","Bayes' theorem",'Random variables','Normal distribution','Mean, variance','Hypothesis testing','Maximum Likelihood Estimation ★','Confidence intervals ★']},
  {name:'Discrete Mathematics', items:['Logic','Sets','Relations','Functions','Graph theory','Boolean algebra','Combinatorics']},
  {name:'Optimization', items:['Gradient descent','SGD / Momentum / Adam ★','Convex optimization','Lagrange multipliers ★']}
]},
{title:'Python for Data Science', desc:'Wrangle, clean, and visualize data like a pro', icon:'🐼', level:'Beginner-Intermediate', priority:'must', groups:[
  {items:['NumPy','Pandas','Matplotlib','Seaborn ★','Plotly (interactive viz) ★','SciPy','Statsmodels ★','Jupyter Notebook']}
]},
{title:'SQL & Databases', desc:'Query, structure, and manage the data behind your models', icon:'🗄️', level:'Beginner-Intermediate', priority:'must', groups:[
  {items:['MySQL or PostgreSQL','Queries','Joins','Indexes','Database design & normalization','NoSQL basics — MongoDB ★']}
]},
{title:'Data Structures & Algorithms', desc:'Sharpen the problem-solving skills interviewers test for', icon:'🌳', level:'Intermediate', priority:'must', groups:[
  {name:'Structures', items:['Arrays','Linked lists','Trees','Graphs','Hash tables','Stacks','Queues']},
  {name:'Techniques', items:['Dynamic programming','Greedy algorithms']},
  {name:'Practice', items:['LeetCode','HackerRank']}
]},
{title:'Classical Machine Learning', desc:'Master traditional ML algorithms and workflows', icon:'🤖', level:'Intermediate', priority:'must', groups:[
  {name:'Topics', items:['Supervised learning','Unsupervised learning','Reinforcement learning','Feature engineering','Model evaluation','Cross-validation']},
  {name:'Algorithms', items:['Linear Regression','Logistic Regression','Decision Trees','Random Forest','SVM','KNN','Naive Bayes','XGBoost','LightGBM ★']},
  {name:'Reinforcement Learning depth ★', items:['Q-learning ★','Deep Q-Networks (DQN) ★','Policy gradients / PPO ★','Gymnasium (OpenAI Gym) ★','Stable-Baselines3 ★']},
  {name:'Library', items:['scikit-learn']}
]},
{title:'Deep Learning', desc:'Neural networks from perceptrons to modern architectures', icon:'🧠', level:'Intermediate', priority:'must', groups:[
  {name:'Framework', items:['PyTorch (recommended)','TensorFlow / Keras (optional)']},
  {name:'Foundations', items:['Feedforward Neural Networks (FNN) ★','Activation functions ★','Backpropagation ★','Optimizers: Adam / SGD / RMSProp ★','Batch normalization & Dropout ★','Loss functions ★']},
  {name:'Architectures', items:['CNN','RNN','LSTM','GRU','Autoencoders','Transfer learning ★']}
]},
{title:'Natural Language Processing', desc:'From bag-of-words to modern transformer-based NLP', icon:'📝', level:'Intermediate', priority:'important', groups:[
  {items:['Text preprocessing','Tokenization','Embeddings','Word2Vec','FastText','GloVe ★','Transformer architecture','Named Entity Recognition ★','Sentiment analysis ★']}
]},
{title:'Large Language Models (LLMs)', desc:'Understand and work with large language models', icon:'🦙', level:'Advanced', priority:'important', groups:[
  {name:'Learn', items:['Transformers','Attention mechanism','BERT','GPT','Llama','Mistral ★','Tokenizers','Context window','Prompt engineering']},
  {name:'Libraries', items:['Hugging Face Transformers','Tokenizers','Datasets','PEFT ★']}
]},
{title:'Generative AI (GenAI)', desc:'Multimodal generation — text, image, audio, and code', icon:'✨', level:'Advanced', priority:'important', groups:[
  {items:['Prompt engineering','Retrieval-Augmented Generation (RAG)','Embeddings','Vector databases (Pinecone / Chroma / FAISS) ★','Fine-tuning','LoRA / QLoRA','Quantization','Diffusion models & image generation ★','GANs ★','AI safety']},
  {name:'Tools', items:['LangChain','LlamaIndex','Ollama','vLLM']}
]},
{title:'Agentic AI & Multi-Agent Systems', desc:'Build autonomous AI agents that plan, reason, use tools, and collaborate', icon:'🕹️', level:'Advanced', priority:'important', groups:[
  {name:'Topics', items:['AI Agents','Tool calling','Function calling','Memory','Planning','Reflection','Multi-agent systems','Model Context Protocol (MCP) ★']},
  {name:'Frameworks', items:['LangGraph','CrewAI','AutoGen','OpenAI Agents SDK']},
  {name:'Projects', items:['AI coding assistant','Research assistant','Personal AI assistant','Browser automation agent']}
]},
{title:'MLOps & LLMOps', desc:'Ship, monitor, and maintain models in production', icon:'⚙️', level:'Advanced', priority:'important', groups:[
  {items:['Docker','Kubernetes','MLflow','DVC','CI/CD','Model serving','Monitoring','Feature stores ★','Drift detection & A/B testing ★']}
]},
{title:'Cloud', desc:'Run AI workloads at scale on a major cloud platform', icon:'☁️', level:'Advanced', priority:'good', groups:[
  {items:['Pick one deeply: AWS, GCP, or Azure','Compute','Storage','Networking','IAM','Serverless','Managed ML (SageMaker / Vertex AI) ★']}
]},
{title:'AI Deployment', desc:'Package and serve models as real, usable products', icon:'🚀', level:'Advanced', priority:'important', groups:[
  {items:['APIs','FastAPI','Docker','Nginx','GPU deployment','Inference optimization','Streamlit / Gradio demos ★','ONNX & model export ★']}
]},
{title:'Explainability & Responsible AI', desc:'Make models interpretable, fair, and accountable ★ new phase', icon:'🔍', level:'Advanced', priority:'good', groups:[
  {items:['SHAP ★','LIME ★','Bias & fairness auditing ★','Model cards & documentation ★','Ethical AI guidelines ★']}
]},
{title:'Cybersecurity for AI', desc:'Defend AI systems — and learn the security fundamentals behind them', icon:'🛡️', level:'Expert', priority:'later', groups:[
  {name:'AI-specific security', items:['Secure AI systems','LLM security','Prompt injection','Jailbreak attacks','AI red teaming','Model poisoning','Adversarial ML','Data privacy']},
  {name:'Security foundations ★ (for the PhD track)', items:['Network security fundamentals ★','Cryptography basics ★','OWASP Top 10 ★','Capture the Flag (CTF) practice ★']}
]},
{title:'System Design', desc:'Design systems that scale to millions of users', icon:'🏗️', level:'Expert', priority:'good', groups:[
  {items:['Scalability','Distributed systems','Load balancing','Caching','Microservices','Message queues','ML system design (e.g. recommender + feature pipeline) ★']}
]},
{title:'Build Projects', desc:'Prove your skills with real, portfolio-worthy builds', icon:'🧩', level:'Expert', priority:'must', groups:[
  {name:'Complete 20–30 projects, e.g.', items:['Spam classifier','Face recognition','Chatbot','Resume screener','RAG chatbot','AI coding assistant','AI voice assistant','AI research agent','AI security analyzer','AI SOC assistant','End-to-end MLOps pipeline ★','Multi-agent system ★']}
]},
{title:'Research', desc:'Read, reproduce, and eventually publish research', icon:'🔬', level:'Expert', priority:'later', groups:[
  {items:['Read papers: arXiv, NeurIPS, ICML, ICLR','Reproduce a published paper','Publish your own work','LaTeX for papers ★']}
]},
{title:'Career & Community', desc:'Turn your skills into a job, a network, and a career ★ new phase', icon:'🎯', level:'Expert', priority:'important', groups:[
  {items:['Portfolio site / GitHub presence ★','Resume & LinkedIn ★','Technical writing / blog ★','Open source contributions ★','ML + DSA interview prep ★','Networking & conferences ★']}
]}
];

export const ROADMAP = RAW_ROADMAP.map((phase, i) => ({
  ...phase,
  color: COLOR_CYCLE[i % COLOR_CYCLE.length],
  num: i + 1,
}));

export function slug(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export function itemId(phaseIdx, groupIdx, item) {
  return `${phaseIdx}::${groupIdx}::${slug(item)}`;
}
