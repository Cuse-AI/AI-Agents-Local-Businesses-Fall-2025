(function() {
  // Create chat widget
  const bubble = document.createElement('div');
  bubble.id = 'ai-chat-bubble';
  bubble.innerHTML = '💬';
  bubble.style.cssText = 'position:fixed;bottom:20px;right:20px;width:60px;height:60px;border-radius:50%;background:#FF6B35;color:white;font-size:30px;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 4px 12px rgba(0,0,0,0.3);z-index:9999;';
  
  const chatWindow = document.createElement('div');
  chatWindow.id = 'ai-chat-window';
  chatWindow.style.cssText = 'position:fixed;bottom:100px;right:20px;width:350px;height:500px;background:white;border-radius:12px;box-shadow:0 4px 20px rgba(0,0,0,0.2);display:none;flex-direction:column;z-index:9998;';
  chatWindow.innerHTML = `
    <div style="padding:16px;background:#FF6B35;color:white;border-radius:12px 12px 0 0;font-weight:bold;">AI Assistant</div>
    <div id="chat-messages" style="flex:1;overflow-y:auto;padding:16px;"></div>
    <div style="padding:12px;border-top:1px solid #eee;">
      <input type="text" id="chat-input" placeholder="Ask a question..." style="width:100%;padding:10px;border:1px solid #ddd;border-radius:6px;"/>
    </div>
  `;
  
  document.body.appendChild(bubble);
  document.body.appendChild(chatWindow);
  
  bubble.onclick = () => {
    chatWindow.style.display = chatWindow.style.display === 'none' ? 'flex' : 'none';
  };
  
  const input = document.getElementById('chat-input');
  const messages = document.getElementById('chat-messages');
  
  input.addEventListener('keypress', async (e) => {
    if (e.key === 'Enter' && input.value.trim()) {
      const question = input.value.trim();
      messages.innerHTML += `<div style="margin:8px 0;text-align:right;"><span style="background:#FF6B35;color:white;padding:8px 12px;border-radius:12px;display:inline-block;">${question}</span></div>`;
      input.value = '';
      
      try {
        const apiKey = document.currentScript.getAttribute('data-api-key');
        const response = await fetch('https://web-production-902d.up.railway.app/agent/ask', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({question, k: 5})
        });
        const data = await response.json();
        messages.innerHTML += `<div style="margin:8px 0;"><span style="background:#f0f0f0;padding
cat > src/api/routes/widget.py << 'EOF'
from fastapi import APIRouter
from fastapi.responses import FileResponse
import os

router = APIRouter(prefix="/widget", tags=["widget"])

@router.get("/widget.js")
async def get_widget():
    widget_path = os.path.join(os.path.dirname(__file__), "../../../static/widget.js")
    return FileResponse(widget_path, media_type="application/javascript")
EOF
cd src/api
cat main.py
cat main.py
