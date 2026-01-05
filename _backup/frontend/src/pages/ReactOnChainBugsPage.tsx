import React from 'react';

const ReactOnChainBugsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-[#f7931a]">React-OnChain Bugs Report</h1>
          <p className="text-gray-300 text-lg">
            Documenting issues encountered during Bitcoin blockchain deployment using react-onchain tool.
          </p>
        </div>

        <div className="space-y-8">
          {/* Bug Report #1 */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
              <span className="text-red-500 text-2xl">🔴</span>
              <div>
                <h2 className="text-xl font-semibold text-red-400">
                  JavaScript &lt;script&gt; Tag Paths Not Rewritten
                </h2>
                <p className="text-gray-400 text-sm mt-1">
                  Critical deployment issue • Affects: All React applications
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-800 rounded p-4">
                <h3 className="text-lg font-medium mb-2 text-yellow-400">Problem Description</h3>
                <div className="text-gray-300 space-y-2">
                  <p>
                    DAMN! Even the new index.html <strong>still has the same issue!</strong> The JavaScript
                    path is <strong>still not rewritten</strong>: <code className="bg-gray-700 px-2 py-1 rounded">src="./static/js/main.7aa24610.js"</code> instead
                    of pointing to the blockchain content.
                  </p>
                  <p>
                    The problem is more fundamental - react-onchain isn't properly rewriting
                    the JavaScript <code>&lt;script&gt;</code> tag paths, only the CSS and asset paths.
                  </p>
                </div>
              </div>

              <div className="bg-gray-800 rounded p-4">
                <h3 className="text-lg font-medium mb-2 text-blue-400">Current Status</h3>
                <div className="text-gray-300 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✅</span>
                    <span>Successfully integrated Bitcoin OS dock with all functionality</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✅</span>
                    <span>All files properly inscribed to blockchain including JS, CSS, assets</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✅</span>
                    <span>CSS paths correctly rewritten to blockchain content URLs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-red-500">❌</span>
                    <span>JavaScript paths not rewritten due to react-onchain tool limitation</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded p-4">
                <h3 className="text-lg font-medium mb-2 text-purple-400">Technical Details</h3>
                <div className="text-gray-300 space-y-2">
                  <p>
                    <strong>JavaScript Inscription:</strong>{' '}
                    <code className="bg-gray-700 px-2 py-1 rounded text-xs">
                      7bae716ca6c375da784ad6e9aacbf2c4f188a8bebbf37c4cc444bedc10382691_0
                    </code>
                  </p>
                  <p>
                    <strong>Expected HTML:</strong>{' '}
                    <code className="bg-gray-700 px-2 py-1 rounded text-xs">
                      src="/content/7bae716ca6c375da784ad6e9aacbf2c4f188a8bebbf37c4cc444bedc10382691_0"
                    </code>
                  </p>
                  <p>
                    <strong>Actual HTML:</strong>{' '}
                    <code className="bg-gray-700 px-2 py-1 rounded text-xs">
                      src="./static/js/main.7aa24610.js"
                    </code>
                  </p>
                </div>
              </div>

              <div className="bg-gray-800 rounded p-4">
                <h3 className="text-lg font-medium mb-2 text-orange-400">Deployment URLs</h3>
                <div className="text-gray-300 space-y-2">
                  <p>
                    <strong>Latest Blockchain Deployment:</strong>{' '}
                    <a 
                      href="https://app.reactonchain.com/content/d6647dc602c2a3d1c86cd7dda2658e960077c6e6a30695e5b1f127803b1a3441_0"
                      className="text-blue-400 hover:text-blue-300 underline break-all"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://app.reactonchain.com/content/d6647dc602c2a3d1c86cd7dda2658e960077c6e6a30695e5b1f127803b1a3441_0
                    </a>
                  </p>
                  <p className="text-red-400">⚠️ Shows white screen due to JavaScript loading issue</p>
                  <p>
                    <strong>Working Vercel Deployment:</strong>{' '}
                    <span className="text-green-400">App works perfectly on traditional hosting</span>
                  </p>
                </div>
              </div>

              <div className="bg-gray-800 rounded p-4">
                <h3 className="text-lg font-medium mb-2 text-green-400">Conclusion</h3>
                <div className="text-gray-300 space-y-2">
                  <p>
                    This is a <strong>react-onchain tool bug</strong>, not an issue with our implementation.
                    The Bitcoin Spreadsheets app with integrated Bitcoin OS dock is fully
                    functional and ready - just blocked by the tool's HTML rewriting limitation
                    where <code>&lt;script&gt;</code> tags aren't being rewritten to point to their blockchain
                    inscriptions.
                  </p>
                  <p>
                    The application works perfectly on traditional hosting (Vercel) and the
                    blockchain deployment is 99% complete.
                  </p>
                </div>
              </div>

              <div className="bg-blue-900 border border-blue-700 rounded p-4">
                <h3 className="text-lg font-medium mb-2 text-blue-300">Next Steps</h3>
                <div className="text-blue-100 space-y-1">
                  <p>• Report this bug to Dan Wags (react-onchain author) via Twitter</p>
                  <p>• Consider contributing a fix to the react-onchain repository</p>
                  <p>• Continue using Vercel for production deployment until fix is available</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-gray-500 text-sm text-center">
            Report generated from Bitcoin Spreadsheets development session • {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReactOnChainBugsPage;